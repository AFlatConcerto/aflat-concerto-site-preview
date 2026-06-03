export type Language = "en" | "zh";

export type SiteInfo = {
  name: string;
  subtitle: string;
  description: string;
  avatar: string;
  heroImage: string;
  backgroundImage: string;
  role: string;
  aura: string;
  style: string;
  profileTags: string[];
};

export type AboutBlock = {
  title: string;
  body: string;
};

export type LinkItem = {
  name: string;
  icon: string;
  url: string;
  note?: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  thumbnail: string;
  fullImage?: string;
  width: number;
  height: number;
  featured?: boolean;
  creator?: string;
  createdAt?: string;
  role?: string;
  client?: string;
  description?: string;
  category?: string;
  tags?: string[];
};

export type PortfolioLabels = {
  aboutEyebrow: string;
  aboutTitle: string;
  role: string;
  aura: string;
  style: string;
  linksEyebrow: string;
  linksTitle: string;
  linksDescription: string;
  home: string;
  galleryEyebrow: string;
  galleryTitle: string;
  galleryDescription: string;
  ongoingArchive: string;
  featured: string;
  work: string;
  viewDetails: string;
  noWorksTitle: string;
  noWorksDescription: string;
  close: string;
  workDetails: string;
  type: string;
  year: string;
  client: string;
  creator: string;
  date: string;
  notes: string;
  navProfile: string;
  navProfileEyebrow: string;
  navLinks: string;
  navLinksEyebrow: string;
  navGallery: string;
  navGalleryEyebrow: string;
  backToTop: string;
  languageEn: string;
  languageZh: string;
};

export type SiteContent = {
  siteKey: string;
  siteInfo: SiteInfo;
  aboutBlocks: AboutBlock[];
  links: LinkItem[];
  gallery: GalleryItem[];
  labels: PortfolioLabels;
};

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${path}`;
}

const englishContent: SiteContent = {
  siteKey: "main",
  siteInfo: {
    name: "AFlatConcerto",
    subtitle: "A-flat Major Concerto",
    description:
      "A VTuber / OC portfolio shaped by deep-sea glow, quiet blue light, and illustration-first storytelling.",
    avatar: assetPath("/assets/avatar.png"),
    heroImage: assetPath("/assets/hero-character.png"),
    backgroundImage: assetPath("/assets/poster-main.webp"),
    role: "VTuber / OC",
    aura: "Deep Sea",
    style: "Neon Dream",
    profileTags: ["Jellyfish", "Sea Glow"],
  },
  aboutBlocks: [
    {
      title: "Profile",
      body: "She/Her / 06.22 / Jellyfish-inspired OC with a cool neon palette and an illustration-first presence.",
    },
    {
      title: "Playing",
      body: "Valorant / TFT / Overwatch / selected Steam games",
    },
    {
      title: "Interests",
      body: "VTuber / OC / animation / novels / DIY fragments",
    },
    {
      title: "Stream Notes",
      body: "Chatting / Valorant / singing / challenge runs",
    },
  ],
  links: [
    { name: "Twitter / X", icon: "X", url: "https://x.com", note: "Profile link" },
    { name: "Bilibili", icon: "B", url: "https://www.bilibili.com", note: "Video archive" },
    { name: "Discord", icon: "D", url: "https://discord.com", note: "Community space" },
    { name: "YouTube", icon: "Y", url: "https://youtube.com", note: "Stream archive" },
    { name: "Xiaohongshu", icon: "R", url: "https://www.xiaohongshu.com", note: "Sketch notes" },
    { name: "Steam", icon: "S", url: "https://store.steampowered.com", note: "Game shelf" },
  ],
  gallery: [
    {
      id: "g-001",
      featured: true,
      title: "Moon Tank",
      thumbnail: assetPath("/assets/gallery/work-1.png"),
      fullImage: assetPath("/assets/gallery/full/work-1.webp"),
      width: 2800,
      height: 2612,
      creator: "AFlatConcerto",
      createdAt: "2026-05-28",
      role: "Illustration / UI Detail",
      client: "Personal Work",
      description:
        "A key visual centered on moonlit glow, chamber framing, and a slow underwater sense of motion.",
      category: "Key Visual",
      tags: ["Jellyfish", "Neon", "Poster"],
    },
    {
      id: "g-002",
      title: "Bubble Choir",
      thumbnail: assetPath("/assets/gallery/work-2.png"),
      fullImage: assetPath("/assets/gallery/full/work-2.webp"),
      width: 2702,
      height: 2800,
      creator: "AFlatConcerto",
      createdAt: "2026-05-30",
      role: "Commission Illustration",
      client: "Private Client",
      description:
        "Bubble clusters with bright edges and particle texture, arranged for a cover-like finish.",
      category: "Commission",
      tags: ["Bubble", "Glow", "Cover"],
    },
    {
      id: "g-003",
      title: "Sea Card Frame",
      thumbnail: assetPath("/assets/gallery/work-3.png"),
      fullImage: assetPath("/assets/gallery/full/work-3.webp"),
      width: 2477,
      height: 2800,
      creator: "AFlatConcerto",
      createdAt: "2026-05-25",
      role: "UI Detail / Card Design",
      client: "Personal Work",
      description:
        "A UI detail study focused on glass-card layering and a darker, denser texture pass.",
      category: "UI Detail",
      tags: ["Glassmorphism", "Frame", "Dark"],
    },
    {
      id: "g-004",
      title: "Abyssal Waltz",
      thumbnail: assetPath("/assets/gallery/work-4.png"),
      fullImage: assetPath("/assets/gallery/full/work-4.webp"),
      width: 1620,
      height: 2100,
      creator: "AFlatConcerto",
      createdAt: "2026-06-01",
      role: "Character Illustration",
      client: "Private Client",
      description:
        "A character-focused portrait crop built around pale glow, floating bubbles, and a colder finish.",
      category: "Commission",
      tags: ["Character", "Water", "Highlight"],
    },
  ],
  labels: {
    aboutEyebrow: "Character File",
    aboutTitle: "About Me",
    role: "Role",
    aura: "Aura",
    style: "Style",
    linksEyebrow: "Links",
    linksTitle: "My Accounts",
    linksDescription: "A small hub for updates, archives, and side paths.",
    home: "Home",
    galleryEyebrow: "Selected Works",
    galleryTitle: "Commission",
    galleryDescription: "A curated archive for commissions, key visuals, and character work.",
    ongoingArchive: "Ongoing Archive",
    featured: "Featured",
    work: "Work",
    viewDetails: "View Details",
    noWorksTitle: "No works in this category yet",
    noWorksDescription: "Add artwork in the CMS to populate this section.",
    close: "Close",
    workDetails: "Work Details",
    type: "Type",
    year: "Year",
    client: "Client",
    creator: "Creator",
    date: "Date",
    notes: "Notes",
    navProfile: "Personal File",
    navProfileEyebrow: "OC profile",
    navLinks: "Links",
    navLinksEyebrow: "Accounts",
    navGallery: "Commission",
    navGalleryEyebrow: "Gallery",
    backToTop: "Back To Top",
    languageEn: "EN",
    languageZh: "中文",
  },
};

const chineseContent: SiteContent = {
  ...englishContent,
  siteInfo: {
    ...englishContent.siteInfo,
    description: "以深海微光、冷蓝色调和插画叙事为核心的 VTuber / OC 个人主页。",
    role: "VTuber / OC",
    aura: "深海",
    style: "霓虹梦境",
    profileTags: ["水母", "海光"],
  },
  aboutBlocks: [
    {
      title: "档案",
      body: "She/Her / 06.22 / 水母灵感 OC，整体以冷色霓虹和插画感为主。",
    },
    {
      title: "游戏",
      body: "Valorant / TFT / Overwatch / 部分 Steam 游戏",
    },
    {
      title: "兴趣",
      body: "VTuber / OC / 动画 / 小说 / DIY 小物",
    },
    {
      title: "直播内容",
      body: "聊天 / Valorant / 唱歌 / 挑战向内容",
    },
  ],
  links: englishContent.links.map((link) => {
    const notes: Record<string, string> = {
      "Twitter / X": "主页链接",
      Bilibili: "视频归档",
      Discord: "社群空间",
      YouTube: "直播归档",
      Xiaohongshu: "草稿笔记",
      Steam: "游戏列表",
    };
    return { ...link, note: notes[link.name] ?? link.note };
  }),
  gallery: englishContent.gallery.map((item) => ({
    ...item,
    client:
      item.client === "Personal Work"
        ? "个人作品"
        : item.client === "Private Client"
          ? "私人委托"
          : item.client,
  })),
  labels: {
    aboutEyebrow: "角色档案",
    aboutTitle: "关于我",
    role: "定位",
    aura: "氛围",
    style: "风格",
    linksEyebrow: "链接",
    linksTitle: "我的账号",
    linksDescription: "用于展示更新、归档和其他平台入口。",
    home: "首页",
    galleryEyebrow: "精选作品",
    galleryTitle: "Commission",
    galleryDescription: "用于整理委托、主视觉、角色作品和页面细节的作品档案。",
    ongoingArchive: "持续更新",
    featured: "精选",
    work: "作品",
    viewDetails: "查看详情",
    noWorksTitle: "该分类暂无作品",
    noWorksDescription: "可在后台新增作品后自动显示在这里。",
    close: "关闭",
    workDetails: "作品详情",
    type: "类型",
    year: "年份",
    client: "客户",
    creator: "作者",
    date: "日期",
    notes: "说明",
    navProfile: "Personal File",
    navProfileEyebrow: "OC 档案",
    navLinks: "Links",
    navLinksEyebrow: "账号",
    navGallery: "Commission",
    navGalleryEyebrow: "作品",
    backToTop: "返回顶部",
    languageEn: "EN",
    languageZh: "中文",
  },
};

export const defaultContentByLanguage: Record<Language, SiteContent> = {
  en: englishContent,
  zh: chineseContent,
};

export const siteInfo = englishContent.siteInfo;
export const aboutBlocks = englishContent.aboutBlocks;
export const links = englishContent.links;
export const gallery = englishContent.gallery;
