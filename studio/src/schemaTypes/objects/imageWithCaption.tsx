import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons' // Placeholder icon for the image type

export default defineType({
  name: 'imageWithCaption',
  title: 'Image with Caption',
  type: 'object',
  icon: ImageIcon, // Use any icon available in your icons package
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows focusing on a specific part of the image
      },
      description: 'Upload the image for this section',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      description: 'A caption or description to display below the image',
      initialValue: 'Ms Menon being awarded for the contributions she has made in the coffee space.',
    }),
    defineField({
      name: 'alignment',
      title: 'Caption Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
      },
      initialValue: 'center',
      description: 'Set the alignment for the caption text',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Untitled Image with Caption',
        media: media,
      }
    },
  },
})
