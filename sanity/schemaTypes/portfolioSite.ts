import { defineArrayMember, defineField, defineType } from "sanity";

export const portfolioSite = defineType({
  name: "portfolioSite",
  title: "Portfolio Site",
  type: "document",
  fields: [
    defineField({
      name: "siteKey",
      title: "Site Key",
      type: "string",
      initialValue: "main",
      validation: (rule) => rule.required(),
      description: "Use main for the current site. Use another key for the second site.",
    }),
    defineField({ name: "nameEn", title: "Name (English)", type: "string" }),
    defineField({ name: "nameZh", title: "Name (Chinese)", type: "string" }),
    defineField({ name: "subtitleEn", title: "Subtitle (English)", type: "string" }),
    defineField({ name: "subtitleZh", title: "Subtitle (Chinese)", type: "string" }),
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
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImage",
      title: "Hero Character Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "backgroundImage",
      title: "Main Poster / Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "roleEn", title: "Role (English)", type: "string" }),
    defineField({ name: "roleZh", title: "Role (Chinese)", type: "string" }),
    defineField({ name: "auraEn", title: "Aura (English)", type: "string" }),
    defineField({ name: "auraZh", title: "Aura (Chinese)", type: "string" }),
    defineField({ name: "styleEn", title: "Style (English)", type: "string" }),
    defineField({ name: "styleZh", title: "Style (Chinese)", type: "string" }),
    defineField({
      name: "profileTagsEn",
      title: "Profile Tags (English)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "profileTagsZh",
      title: "Profile Tags (Chinese)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "aboutBlocks",
      title: "About Blocks",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "titleEn", title: "Title (English)", type: "string" }),
            defineField({ name: "titleZh", title: "Title (Chinese)", type: "string" }),
            defineField({
              name: "bodyEn",
              title: "Body (English)",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "bodyZh",
              title: "Body (Chinese)",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: { title: "titleEn", subtitle: "titleZh" },
          },
        }),
      ],
    }),
    defineField({
      name: "links",
      title: "Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({
              name: "icon",
              title: "Icon Letter",
              type: "string",
              validation: (rule) => rule.max(2),
            }),
            defineField({ name: "url", title: "URL", type: "url" }),
            defineField({ name: "noteEn", title: "Note (English)", type: "string" }),
            defineField({ name: "noteZh", title: "Note (Chinese)", type: "string" }),
          ],
          preview: {
            select: { title: "name", subtitle: "url" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "nameEn",
      subtitle: "siteKey",
      media: "avatar",
    },
  },
});
