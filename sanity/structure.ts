import type { StructureResolver } from "sanity/structure";
import { managedSites } from "./sites";

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("选择要管理的网站")
    .items(
      managedSites.map((site) =>
        S.listItem()
          .id(`site-${site.key}`)
          .title(site.title)
          .child(
            S.list()
              .id(`site-${site.key}-menu`)
              .title(site.title)
              .items([
                S.listItem()
                  .id(`site-${site.key}-home`)
                  .title("首页内容")
                  .schemaType("portfolioSite")
                  .child(
                    S.document()
                      .id(site.documentId)
                      .schemaType("portfolioSite")
                      .documentId(site.documentId)
                      .title(`${site.shortTitle} - 首页内容`),
                  ),
                S.listItem()
                  .id(`site-${site.key}-artworks`)
                  .title("作品管理")
                  .schemaType("artwork")
                  .child(
                    S.documentTypeList("artwork")
                      .id(`artwork-${site.key}`)
                      .title(`${site.shortTitle} - 作品管理`)
                      .filter("_type == 'artwork' && siteKey == $siteKey")
                      .params({ siteKey: site.key })
                      .initialValueTemplates([
                        S.initialValueTemplateItem("artwork-by-site", {
                          siteKey: site.key,
                        }),
                      ]),
                  ),
              ]),
          ),
      ),
    );
