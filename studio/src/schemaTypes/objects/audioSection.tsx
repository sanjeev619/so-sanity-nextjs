import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons' // Using PlayIcon as an alternative

export default defineType({
  name: 'audioSection',
  title: 'Audio Section',
  type: 'object',
  icon: PlayIcon, // Replace with any available icon, or remove this line if an icon is not necessary
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title for the audio section',
      initialValue: 'Listen to the generational brewing tips',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description or subtitle for the audio content',
      initialValue: 'Learn the secrets of brewing from Miss Menon herself.',
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      options: {
        accept: 'audio/*', // Restrict to audio files only
      },
      description: 'Upload the audio file for this section',
    }),
    defineField({
      name: 'speakerImage',
      title: 'Speaker Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'An optional image of the speaker or related image',
    }),
    defineField({
      name: 'leftBorderColour',
      title: 'Left Border Colour',
      type: 'string',
      description: 'A color code for the left border (e.g., #AABBCC)',
      initialValue: '#87B79D', // Default color code
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'speakerImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Audio Section',
        subtitle: subtitle,
        media: media,
      }
    },
  },
})
