import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default defineConfig({
  name: "aflat_concerto_portfolio",
  title: "AFlatConcerto Portfolio CMS",
  projectId,
  dataset,
  basePath: `${basePath}/studio`,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
