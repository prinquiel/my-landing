import { groq } from "next-sanity";

export const heroQuery = groq`*[_type=="hero"][0]{
  eyebrow, title, subtitle, cta, image
}`;

export const testimonialsQuery = groq`*[_type=="testimonial"]|order(_createdAt desc)[0..5]{
  quote, author, role, avatar
}`;