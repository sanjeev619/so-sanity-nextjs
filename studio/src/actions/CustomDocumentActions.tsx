import {
  DocumentActionComponent,
  DocumentActionProps,
  DocumentActionsContext,
  SanityDocument,
  useClient,
} from 'sanity'
import {apiVersion} from '../lib/api'

// Define DocumentData to extend SanityDocument
type DocumentData = SanityDocument & {
  status?: string
}

const SubmitAction = (props: DocumentActionProps) => {
  const client = useClient({apiVersion: apiVersion});

  return {
    label: 'Submit For Review',
    name: 'SubmitForReview',
    onHandle: async () => {
      const { id } = props;
      const draftId = `drafts.${id}`;
      try {
        await client
          .patch(draftId) // Patch the document with the specified ID
          .set({ status: 'inReview' }) // Set the status to 'inReview'
          .commit(); // Commit the patch to apply changes

        console.log('Document status updated to inReview');
      } catch (error) {
        console.error('Error updating document status:', error);
      }

      props.onComplete(); // Signal that the action is complete
    },
  }
};

// Define ApproveAction
export const ApproveAction = (props: DocumentActionProps) => {
  const client = useClient({apiVersion: apiVersion});

  return {
    label: 'Approve',
    onHandle: async () => {
      const { id } = props;
      const draftId = `drafts.${id}`;
      try {
        // Update the document's status to 'approved'
        await client
          .patch(draftId) // Patch the document with the specified ID
          .set({ status: 'approved' }) // Set the status to 'approved'
          .commit(); // Commit the patch to apply changes

        console.log('Document status updated to approved');
      } catch (error) {
        console.error('Error updating document status:', error);
      }

      props.onComplete(); // Signal that the action is complete
    },
  };
};

// Define PublishAction
const ExtendedPublishAction = (publishAction: DocumentActionComponent, props: DocumentActionProps) => {
  const client = useClient({apiVersion: apiVersion});
  const { id } = props;
  const draftId = `drafts.${id}`; // Use the draft ID

  // Get the default publish action's properties
  const defaultPublishAction = publishAction(props);

  return {
    ...defaultPublishAction,
    label: 'Publish',
    name: 'CustomPublish',
    onHandle: async () => {
      try {
        // Step 1: Update a custom field in the draft document
        await client
          .patch(draftId) // Target the draft version with `drafts.` prefix
          .set({ status: 'published' }) // Update the custom field
          .commit(); // Commit the patch to apply changes

        console.log('Draft document updated with custom field');

        // Step 2: Execute the original publish action to publish the document
        if (defaultPublishAction) {
          await defaultPublishAction.onHandle?.();
          console.log('Document published with the updated field');
        } else {
          console.warn('Publish action is undefined');
        }

        console.log('Document published successfully');
      } catch (error) {
        console.error('Error during custom publish:', error);
      }

      props.onComplete();
    },
  };
}

export function CustomDocumentActions(
  prevActions: DocumentActionComponent[],
  context: DocumentActionsContext,
) {

  const {schemaType, currentUser, documentId, getClient} = context;
  
  const client = getClient({apiVersion: apiVersion})
  console.log('CustomDocumentActions:client:', client)

  if (schemaType !== 'post') {
    return prevActions;
  }

  const publishAction = prevActions.find(previousAction => previousAction.action === 'publish');
  const actions:DocumentActionComponent[] = [];

  const query = `
    *[_id in [$publishedId, $draftId]]
  `;
  const params = {
    publishedId: documentId,
    draftId: `drafts.${documentId}`,
  };

  client.fetch(query, params).then((documents) => {
    const publishedDoc = documents.find((doc:any) => doc._id === documentId);
    const draftDoc = documents.find((doc:any) => doc._id === `drafts.${documentId}`);
  
    if (publishedDoc) {
      console.log('Published Document:', publishedDoc);
    } else {
      console.log('No Published Document found.');
    }
  
    if (draftDoc) {
      console.log('Draft Document:', draftDoc);
    } else {
      console.log('No Draft Document found.');
    }

    if (draftDoc) {
      if(draftDoc.status === 'draft' || draftDoc.status === 'published') {
        actions.push(SubmitAction);
      } else if (draftDoc.status === 'inReview') {
        actions.push(ApproveAction);
      } else if (draftDoc.status === 'approved') {
        actions.push((props) => ExtendedPublishAction(publishAction as DocumentActionComponent, props));
      }
    }

  });
  
  console.log('CustomDocumentActions:actions:', publishAction);
  return actions;
}
