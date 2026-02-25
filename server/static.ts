import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { resolveProductMeta } from "@shared/products";

function injectProductMeta(html: string, hostname: string): string {
  const meta = resolveProductMeta(hostname);

  return html
    .replaceAll("__META_TITLE__", meta.metaTitle)
    .replaceAll("__META_DESCRIPTION__", meta.metaDescription)
    .replaceAll("__OG_TITLE__", meta.ogTitle)
    .replaceAll("__OG_DESCRIPTION__", meta.ogDescription)
    .replaceAll("__GA_ID__", meta.gaId)
    .replaceAll("__GTAG_ID__", meta.gtagId)
    .replaceAll("__GTAG_CONVERSION__", meta.gtagConversion)
    .replaceAll("__BRAND_NAME__", meta.brandName)
    .replaceAll("__CONTACT_EMAIL__", meta.contactEmail)
    .replaceAll("__NOSCRIPT_HEADLINE__", meta.noscriptHeadline)
    .replaceAll("__NOSCRIPT_DESCRIPTION__", meta.noscriptDescription)
    .replaceAll("__NOSCRIPT_PROBLEMS__", meta.noscriptProblems.map(p => `<li>${p}</li>`).join(""))
    .replaceAll("__NOSCRIPT_PRICING__", meta.noscriptPricing.map(p => `<li><strong>${p.split(" — ")[0]}</strong> — ${p.split(" — ").slice(1).join(" — ")}</li>`).join(""))
    .replaceAll("__NOSCRIPT_CTA__", meta.noscriptCta);
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Read index.html template once
  const indexHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");

  app.use(express.static(distPath, { index: false }));

  // fall through to index.html if the file doesn't exist
  app.use("/{*path}", (req, res) => {
    const html = injectProductMeta(indexHtml, req.hostname);
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });
}
