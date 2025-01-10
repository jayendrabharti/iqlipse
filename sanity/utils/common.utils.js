import client from "./client";
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(client)

export function imageURL(source) {
  return builder.image(source)
}
