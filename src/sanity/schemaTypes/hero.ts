import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r)=>r.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text" }),
    defineField({
      name: "cta",
      title: "Primary CTA",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "url" },
      ],
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});