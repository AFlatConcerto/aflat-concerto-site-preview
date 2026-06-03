import { defineArrayMember, defineField, defineType } from "sanity";

export const artwork = defineType({
  name: "artwork",
  title: "Artwork",
  type: "document",
  fields: [
    defineField({
      name: "siteKey",
      title: "Site Key",
      type: "string",
      initialValue: "main",
      validation: (rule) => rule.required(),
      description: "Use the same key as the portfolio site this artwork belongs to.",
    }),
    defineField({
      name: "featured",
      title: "Featured Work",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 100,
    }),
    defineField({
      name: "titleEn",
      title: "Title (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "titleZh", title: "Title (Chinese)", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Key Visual",
          "Commission",
          "UI Detail",
          "Character Art",
          "Reference Sheet",
          "Cover Art",
          "Stream Asset",
          "Sketch",
          "Personal Work",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fullImage",
      title: "Full Detail Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "descriptionEn",
      title: "Description (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionZh",
      title: "Description (Chinese)",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "roleEn", title: "Role (English)", type: "string" }),
    defineField({ name: "roleZh", title: "Role (Chinese)", type: "string" }),
    defineField({ name: "clientEn", title: "Client (English)", type: "string" }),
    defineField({ name: "clientZh", title: "Client (Chinese)", type: "string" }),
    defineField({ name: "creator", title: "Creator", type: "string" }),
    defineField({ name: "createdAt", title: "Created Date", type: "date" }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: {
    select: {
      title: "titleEn",
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
