import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";
export const urlFor = (src: any) => imageUrlBuilder(sanityClient).image(src);