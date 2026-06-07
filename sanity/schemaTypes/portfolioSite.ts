import { defineArrayMember, defineField, defineType } from "sanity";

export const portfolioSite = defineType({
  name: "portfolioSite",
  title: "首页内容",
  type: "document",
  groups: [
    { name: "basic", title: "基础文字", default: true },
    { name: "images", title: "图片" },
    { name: "theme", title: "颜色设置" },
    { name: "about", title: "关于我" },
    { name: "links", title: "账号链接" },
  ],
  fields: [
    defineField({
      name: "siteKey",
      title: "网站标识",
      type: "string",
      initialValue: "main",
      hidden: true,
      readOnly: true,
      validation: (rule) => rule.required(),
      description: "系统字段，客户不用填写。",
    }),
    defineField({
      name: "adminTitle",
      title: "后台显示名称",
      type: "string",
      group: "basic",
      description:
        "用于后台左侧的网站列表名称。修改并发布后，刷新后台即可看到新名称。",
    }),
    defineField({ name: "nameEn", title: "网站名称（英文）", type: "string", group: "basic" }),
    defineField({ name: "nameZh", title: "网站名称（中文）", type: "string", group: "basic" }),
    defineField({ name: "subtitleEn", title: "副标题（英文）", type: "string", group: "basic" }),
    defineField({ name: "subtitleZh", title: "副标题（中文）", type: "string", group: "basic" }),
    defineField({
      name: "descriptionEn",
      title: "网站简介（英文）",
      type: "text",
      rows: 3,
      group: "basic",
    }),
    defineField({
      name: "descriptionZh",
      title: "网站简介（中文）",
      type: "text",
      rows: 3,
      group: "basic",
    }),
    defineField({
      name: "avatar",
      title: "头像",
      type: "image",
      options: { hotspot: true },
      group: "images",
    }),
    defineField({
      name: "heroImage",
      title: "角色主图",
      type: "image",
      options: { hotspot: true },
      group: "images",
    }),
    defineField({
      name: "backgroundImage",
      title: "首页海报 / 背景图",
      type: "image",
      options: { hotspot: true },
      group: "images",
    }),
    defineField({
      name: "themeBackground",
      title: "整体背景色",
      type: "string",
      group: "theme",
      description: "填写十六进制颜色，例如 #020611。",
      validation: (rule) =>
        rule.regex(/^#[0-9a-fA-F]{6}$/, {
          name: "hex color",
          invert: false,
        }),
    }),
    defineField({
      name: "themeSurface",
      title: "卡片/面板颜色",
      type: "string",
      group: "theme",
      description: "用于内容面板、作品卡片和按钮底色，例如 #0b1026。",
      validation: (rule) =>
        rule.regex(/^#[0-9a-fA-F]{6}$/, {
          name: "hex color",
          invert: false,
        }),
    }),
    defineField({
      name: "themePrimary",
      title: "主色",
      type: "string",
      group: "theme",
      description: "用于边框、光晕、当前选中状态，例如 #678cff。",
      validation: (rule) =>
        rule.regex(/^#[0-9a-fA-F]{6}$/, {
          name: "hex color",
          invert: false,
        }),
    }),
    defineField({
      name: "themeAccent",
      title: "强调色",
      type: "string",
      group: "theme",
      description: "用于 hover、发光和辅助装饰，例如 #6ce6ff。",
      validation: (rule) =>
        rule.regex(/^#[0-9a-fA-F]{6}$/, {
          name: "hex color",
          invert: false,
        }),
    }),
    defineField({
      name: "themeText",
      title: "主要文字色",
      type: "string",
      group: "theme",
      description: "建议使用浅色，例如 #e5f0ff。",
      validation: (rule) =>
        rule.regex(/^#[0-9a-fA-F]{6}$/, {
          name: "hex color",
          invert: false,
        }),
    }),
    defineField({ name: "roleEn", title: "定位（英文）", type: "string", group: "basic" }),
    defineField({ name: "roleZh", title: "定位（中文）", type: "string", group: "basic" }),
    defineField({ name: "auraEn", title: "氛围（英文）", type: "string", group: "basic" }),
    defineField({ name: "auraZh", title: "氛围（中文）", type: "string", group: "basic" }),
    defineField({ name: "styleEn", title: "风格（英文）", type: "string", group: "basic" }),
    defineField({ name: "styleZh", title: "风格（中文）", type: "string", group: "basic" }),
    defineField({
      name: "profileTagsEn",
      title: "个人标签（英文）",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      group: "basic",
    }),
    defineField({
      name: "profileTagsZh",
      title: "个人标签（中文）",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      group: "basic",
    }),
    defineField({
      name: "aboutBlocks",
      title: "关于我信息块",
      type: "array",
      group: "about",
      of: [
        defineArrayMember({
          type: "object",
          title: "一条关于我信息",
          fields: [
            defineField({ name: "titleEn", title: "标题（英文）", type: "string" }),
            defineField({ name: "titleZh", title: "标题（中文）", type: "string" }),
            defineField({
              name: "bodyEn",
              title: "内容（英文）",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "bodyZh",
              title: "内容（中文）",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: { title: "titleZh", subtitle: "titleEn" },
          },
        }),
      ],
    }),
    defineField({
      name: "links",
      title: "社交链接",
      type: "array",
      group: "links",
      of: [
        defineArrayMember({
          type: "object",
          title: "一个账号链接",
          fields: [
            defineField({ name: "name", title: "平台名称", type: "string" }),
            defineField({
              name: "icon",
              title: "图标字母",
              type: "string",
              validation: (rule) => rule.max(2),
              description: "例如 X、B、D、Y，前台会显示在圆形图标内。",
            }),
            defineField({ name: "url", title: "链接地址", type: "url" }),
            defineField({ name: "noteEn", title: "说明（英文）", type: "string" }),
            defineField({ name: "noteZh", title: "说明（中文）", type: "string" }),
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
      title: "nameZh",
      subtitle: "siteKey",
      media: "avatar",
    },
  },
});
