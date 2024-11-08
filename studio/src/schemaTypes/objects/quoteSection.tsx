import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons' // using TextIcon as a placeholder

export default defineType({
  name: 'quoteSection',
  title: 'Quote Section',
  type: 'object',
  icon: TextIcon, // Placeholder icon
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The main quote text',
      initialValue: 'Our coffee is like a canvas painted with a multitude of flavors, each region offering its unique masterpiece.',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'The author of the quote',
      initialValue: 'Anonymous',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true, // Allows selecting a focal point in the logo image
      },
      description: 'Upload an image to use as the logo or introductory visual.',
      // Note: Images don’t support default values directly in Sanity.
    }),
    defineField({
      name: 'leftBorderColour',
      title: 'Left Border Colour',
      type: 'string',
      description: 'A color code for the left border (e.g., #AABBCC).',
      initialValue: '#87B79D', // Replace with your desired default color code
    }),
    defineField({
      name: 'showShareIcon',
      title: 'Show Share Icon',
      type: 'boolean',
      description: 'Toggle to show or hide the share icon',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'quote',
      subtitle: 'author',
      media: 'logo',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title ? `"${title}"` : 'Untitled Quote',
        subtitle: subtitle ? `- ${subtitle}` : 'Anonymous',
        media: media,
      }
    },
  },
})
