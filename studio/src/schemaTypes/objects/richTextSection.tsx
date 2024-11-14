import { Icon, TextIcon } from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'richTextSection',
  title: 'Rich Text Section',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule) => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                  }),
                  defineField({
                    name: 'openInNewTab',
                    title: 'Open in new tab',
                    type: 'boolean',
                    initialValue: false,
                  }),
                ],
              },
            ],
          },
        }),
        // Additional inline objects can go here if needed
      ],
    }),
  ],
  preview: {
    select: {
      title: 'content.0.children.0.text', // Display the first block of text as preview
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title || 'Rich Text Section',
      }
    },
  },
})
