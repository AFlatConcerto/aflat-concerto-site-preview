"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { sanityEnabled } from "@/sanity/env";

export function Studio() {
  if (!sanityEnabled) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050915] px-5 text-slate-100">
        <section className="w-full max-w-xl rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(18,28,58,0.96),rgba(7,11,26,0.92))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.36)]">
          <p className="text-xs uppercase tracking-[0.32em] text-blue-200/70">
            CMS Setup
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Backend project required
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The portfolio is ready for Sanity CMS, but the Sanity project ID and dataset
            have not been configured yet. Create the Sanity project, add the environment
            variables from .env.example, then redeploy the site.
          </p>
          <div className="mt-5 rounded-[18px] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-blue-100/85">
            NEXT_PUBLIC_SANITY_PROJECT_ID
            <br />
            NEXT_PUBLIC_SANITY_DATASET
            <br />
            NEXT_PUBLIC_SITE_KEY
          </div>
        </section>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
