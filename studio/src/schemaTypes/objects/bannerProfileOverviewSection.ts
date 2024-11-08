import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'bannerProfileOverviewSection',
  title: 'Banner Profile Overview Section',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows selecting a focal point in the image
      },
    }),
    defineField({
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      description: 'A description of the image for accessibility purposes',
    }),
    defineField({
      name: 'profileOverview',
      title: 'Profile Overview',
      type: 'text',
      description: 'A short overview or caption to display alongside the image',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'altText',
    },
    prepare({title, media}) {
      return {
        title: title || 'Untitled Banner Image',
        media: media,
      }
    },
  },
})
