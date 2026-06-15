export const managedSites = [
  {
    key: "main",
    orderLabel: "一",
    title: "网站一：AFlatConcerto",
    shortTitle: "AFlatConcerto",
    documentId: "portfolioSite-main",
  },
  {
    key: "second",
    orderLabel: "二",
    title: "网站二：AFlatConcerto个人网站",
    shortTitle: "AFlatConcerto个人网站",
    documentId: "portfolioSite-second",
  },
  {
    key: "third",
    orderLabel: "三",
    title: "网站三：新个人网站",
    shortTitle: "新个人网站",
    documentId: "portfolioSite-third",
  },
] as const;

export type ManagedSiteKey = (typeof managedSites)[number]["key"];
