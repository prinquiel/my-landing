import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", validation: (r)=>r.required() }),
    defineField({ name: "author", title: "Author", type: "string", validation: (r)=>r.required() }),
    defineField({ name: "role", title: "Role/Company", type: "string" }),
    defineField({ name: "avatar", title: "Avatar", type: "image" }),
  ],
});