// import page from "./page";
import person from './documents/person'
import page from './documents/page'
import post from './documents/post'
import callToAction from './objects/callToAction'
import infoSection from './objects/infoSection'
import settings from './singletons/settings'
import link from './objects/link'
import blockContent from './objects/blockContent'
import bannerProfileOverviewSection from './objects/bannerProfileOverviewSection'
import imageGallery from './objects/imageGallery'
import imageWithCaption from './objects/imageWithCaption'
import audioSection from './objects/audioSection'
import quoteSection from './objects/quoteSection'
import instagramCard from './objects/instagramCard'

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
  
  bannerProfileOverviewSection,
  imageWithCaption,
  imageGallery,
  audioSection,
  quoteSection,
  instagramCard,
]
