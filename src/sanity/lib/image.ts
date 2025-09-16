import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (src: any) => imageUrlBuilder(sanityClient).image(src);