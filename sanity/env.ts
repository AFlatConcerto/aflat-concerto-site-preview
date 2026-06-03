export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-06-03";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "00000000";

export const siteKey = process.env.NEXT_PUBLIC_SITE_KEY || "main";

export const sanityEnabled = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET,
);
