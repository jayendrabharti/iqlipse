import client from "./client";
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(client)

export function imageURL(source,format='webp') {
  return builder.image(source).format(format)
}
