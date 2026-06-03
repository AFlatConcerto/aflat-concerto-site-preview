"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteInfo } from "@/data/site";
import { GlassCard } from "./GlassCard";

export function HeroSection() {
  return (
    <section id="home" className="relative px-4 pt-2">
      <GlassCard className="overflow-hidden p-0">
        <div className="relative h-[460px] w-full">
          <Image
            src={siteInfo.heroImage}
            alt={`${siteInfo.name} hero`}
            fill
            className="object-cover object-top opacity-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-slate-950/80" />
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55 }}
            className="absolute inset-x-3 bottom-3 rounded-2xl border border-blue-100/20 bg-slate-950/60 p-4 backdrop-blur-md"
          >
            <p className="text-xs tracking-[0.25em] text-blue-200/90">
              PERSONAL INFORMATION
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-50">
              {siteInfo.name}
            </h1>
            <h2 className="mt-1 text-lg text-blue-100/95">{siteInfo.subtitle}</h2>
            <p className="mt-3 text-sm leading-6 text-blue-100/90">
              {siteInfo.description}
            </p>
          </motion.div>
        </div>
      </GlassCard>
    </section>
  );
}
