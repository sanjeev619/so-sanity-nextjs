import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons' // Placeholder icon for the gallery type

export default defineType({
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'imageWithCaption'}], // Reference the single imageWithCaption type
      description: 'Add multiple images with individual captions',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'Carousel', value: 'carousel'},
          {title: 'Single Column', value: 'singleColumn'},
        ],
      },
      initialValue: 'singleColumn',
      description: 'Choose the layout for displaying the images',
    }),
    defineField({
      name: 'imagesPerRow',
      title: 'Images per Row',
      type: 'number',
      description: 'Specify the number of images to display in a single row (only applicable for grid layout)',
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 2,
    }),
  ],
  preview: {
    select: {
      title: 'layout',
      media: 'images.0.image',
    },
    prepare({title, media}) {
      return {
        title: `Image Gallery - ${title || 'Single Column'}`,
        media: media,
      }
    },
  },
})
