# Project Status

## Project
- Workspace: current repository
- Stack: `Next.js + TypeScript + Tailwind CSS + Framer Motion`
- Deployment target: `GitHub Pages`
- Delivery mode: `Plan A`
- Meaning of Plan A: no admin panel, but content stays maintainable through structured data files and image assets

## Current Product Direction
- The PSD-style landing visual is the primary hero
- The two image buttons inside the visual are real clickable hotspots
- `LINKS / MY ACCOUNTS` scrolls to the links section
- `HOME / HOME PAGE` scrolls back to the top
- Gallery stays on the same page and opens a modal instead of navigating away

## Implemented
- Next.js app scaffold is complete
- Single-page layout is in place
- Hero uses the optimized poster asset: `public/assets/poster-main.webp`
- PSD button crops are used as clickable hotspots:
  - `public/assets/hotspots/btn-links.png`
  - `public/assets/hotspots/btn-home.png`
- About / Links / Gallery sections exist
- Gallery modal exists
- Gallery data supports:
  - `thumbnail`
  - `fullImage`
  - `width`
  - `height`
- Upscaled modal images are in place:
  - `public/assets/gallery/full/work-1.webp`
  - `public/assets/gallery/full/work-2.webp`
  - `public/assets/gallery/full/work-3.webp`
  - `public/assets/gallery/full/work-4.webp`
- `data/site.ts` text content has been cleaned and normalized
- `docs/gallery-assets-spec.md` has been rewritten in clean UTF-8
- Unused debug assets removed:
  - `public/assets/background.png`
  - `public/assets/hotspots/debug-buttons-area.png`
  - `public/assets/extract/group_14_buttons.png`
- Static export config for GitHub Pages is in place

## Main Files
- Entry page: [app/page.tsx](C:/Users/lenovo/OneDrive/文档/降A大调协奏曲oc个人主页网站开发/app/page.tsx)
- Hero and hotspot logic: [components/PosterStage.tsx](C:/Users/lenovo/OneDrive/文档/降A大调协奏曲oc个人主页网站开发/components/PosterStage.tsx)
- Gallery list: [components/GallerySection.tsx](C:/Users/lenovo/OneDrive/文档/降A大调协奏曲oc个人主页网站开发/components/GallerySection.tsx)
- Gallery modal: [components/GalleryModal.tsx](C:/Users/lenovo/OneDrive/文档/降A大调协奏曲oc个人主页网站开发/components/GalleryModal.tsx)
- Content data: [data/site.ts](C:/Users/lenovo/OneDrive/文档/降A大调协奏曲oc个人主页网站开发/data/site.ts)
- Asset guide: [docs/gallery-assets-spec.md](C:/Users/lenovo/OneDrive/文档/降A大调协奏曲oc个人主页网站开发/docs/gallery-assets-spec.md)

## Known Issues
- Link URLs and notes are still placeholder values and should be replaced with real accounts
- Hotspot alignment still needs a browser-side visual check after the poster WebP switch
- `components/HeroSection.tsx` and `public/assets/hero-character.png` are legacy from the earlier layout and should be either re-used intentionally or removed
- Gallery thumbnails are still PNG files and can be optimized later if page weight becomes a concern
- README is still the default Next.js scaffold text

## Recommended Next Steps
1. Run a browser visual pass and tune hotspot positions if needed
2. Replace placeholder account links in `data/site.ts`
3. Decide whether to keep or remove the legacy hero component and asset
4. Optionally optimize gallery thumbnails and avatar assets
5. Rewrite `README.md` if the repository will be handed off

## Run Commands
- Dev: `npm run dev`
- Preview static export: `npm run preview`
- Lint: `npm run lint`
- Build: `npm run build`

## How To Resume In A New Chat
Use this message:

```text
Continue this project:
C:\Users\lenovo\OneDrive\文档\降A大调协奏曲oc个人主页网站开发

First read:
- docs/STATUS.md
- data/site.ts
- components/PosterStage.tsx
- components/GallerySection.tsx
- components/GalleryModal.tsx
- app/page.tsx

Then continue from the current status.
```
