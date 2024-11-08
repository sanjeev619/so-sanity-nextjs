import {defineField, defineType} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons' // Placeholder icon if there's a suitable icon, or replace with a generic icon

export default defineType({
  name: 'instagramCard',
  title: 'Instagram Card',
  type: 'object',
  icon: EarthGlobeIcon, // Replace with another icon if necessary
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title or heading, e.g., "Follow us on Instagram"',
      initialValue: 'Follow us on Instagram',
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      description: 'An image for the logo or introductory visual (e.g., "So," image)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      description: 'Text for the clickable link, e.g., "Instagram"',
      initialValue: 'Instagram',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
      description: 'URL for the Instagram page or post',
    }),
    defineField({
      name: 'postImage',
      title: 'Post Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image of the Instagram post (needs to be uploaded manually)',
    }),
    defineField({
      name: 'borderColour',
      title: 'Border Colour',
      type: 'string',
      description: 'Color for the decorative border (e.g., #AABBCC)',
      initialValue: '#AABBCC', // Example default color
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'linkText',
      media: 'postImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title,
        subtitle: `Link: ${subtitle || ''}`,
        media: media,
      }
    },
  },
})
