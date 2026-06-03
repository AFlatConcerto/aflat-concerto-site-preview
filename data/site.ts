export type SiteInfo = {
  name: string;
  subtitle: string;
  description: string;
  avatar: string;
  heroImage: string;
  backgroundImage: string;
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

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${path}`;
}

export const siteInfo: SiteInfo = {
  name: "AFlatConcerto",
  subtitle: "A-flat Major Concerto",
  description:
    "A VTuber / OC portfolio shaped by deep-sea glow, quiet blue light, and illustration-first storytelling.",
  avatar: assetPath("/assets/avatar.png"),
  heroImage: assetPath("/assets/hero-character.png"),
  backgroundImage: assetPath("/assets/poster-main.webp"),
};

export const aboutBlocks = [
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
];

export const links: LinkItem[] = [
  { name: "Twitter / X", icon: "X", url: "https://x.com", note: "Profile link" },
  { name: "Bilibili", icon: "B", url: "https://www.bilibili.com", note: "Video archive" },
  { name: "Discord", icon: "D", url: "https://discord.com", note: "Community space" },
  { name: "YouTube", icon: "Y", url: "https://youtube.com", note: "Stream archive" },
  { name: "Xiaohongshu", icon: "R", url: "https://www.xiaohongshu.com", note: "Sketch notes" },
  { name: "Steam", icon: "S", url: "https://store.steampowered.com", note: "Game shelf" },
];

export const gallery: GalleryItem[] = [
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
];
