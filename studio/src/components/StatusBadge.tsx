// components/StatusBadge.tsx

import { DocumentBadgeComponent, DocumentBadgesContext, useClient } from 'sanity';
import { ClockIcon, CubeIcon, LaunchIcon } from '@sanity/icons';
import { apiVersion } from '../lib/api';

const InReviewBadge: DocumentBadgeComponent = () => {
  return {
    label: 'In Review',
    color: 'warning',
    icon: ClockIcon,
  };
};

const DraftBadge: DocumentBadgeComponent = () => {
  return {
    label: 'Draft',
    color: 'primary',
    icon: CubeIcon,
  };
};

const ApprovedBadge: DocumentBadgeComponent = () => {
  return {
    label: 'Approved',
    color: 'success',
    icon: LaunchIcon,
  };
};

export function StatusBadge(context: DocumentBadgesContext): DocumentBadgeComponent[] {
  const { documentId } = context;

  const badges:DocumentBadgeComponent[] = [];

  let status = "";
  useClient({apiVersion: apiVersion}).getDocument(`drafts.${documentId}`).then((doc:any) => {
    status = doc.status;
    if (status === 'inReview') {
      badges.push(InReviewBadge);
    } else if (status === 'draft' || status === 'published') {
      badges.push(DraftBadge);
    } else if (status === 'approved') {
      badges.push(ApprovedBadge);
    } else {
      return badges;
    }
  }).catch((err) => {
    console.error('Error fetching document:', err);
  });

  return badges;
}
