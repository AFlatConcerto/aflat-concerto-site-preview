import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { LinksSection } from "@/components/LinksSection";
import { PosterStage } from "@/components/PosterStage";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <div className="page-aura" />
      <main className="relative mx-auto flex w-full max-w-[1560px] flex-col gap-5 px-3 pt-3 pb-10 md:gap-6 md:px-5 md:pt-5 md:pb-14 xl:px-8">
        <PosterStage />

        <section className="relative space-y-5 md:space-y-6">
          <div className="pointer-events-none absolute inset-x-10 top-6 -z-10 h-48 rounded-full bg-[radial-gradient(circle,_rgba(121,163,255,0.22),_transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute -left-10 top-24 -z-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(172,139,255,0.18),_transparent_68%)] blur-3xl" />
          <div className="pointer-events-none absolute right-6 top-12 -z-10 h-40 w-64 rounded-full bg-[radial-gradient(circle,_rgba(106,236,255,0.16),_transparent_70%)] blur-3xl" />
          <AboutSection />
          <LinksSection />
          <GallerySection />
        </section>
      </main>
    </div>
  );
}
