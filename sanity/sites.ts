export const managedSites = [
  {
    key: "main",
    title: "网站一：AFlatConcerto",
    shortTitle: "AFlatConcerto",
    documentId: "portfolioSite-main",
  },
  {
    key: "second",
    title: "网站二：新网站",
    shortTitle: "新网站",
    documentId: "portfolioSite-second",
  },
] as const;

export type ManagedSiteKey = (typeof managedSites)[number]["key"];
