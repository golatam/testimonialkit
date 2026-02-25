import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { resolveProductMeta } from "@shared/products";

const viteLogger = createLogger();

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

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );

      // Inject product meta based on hostname
      template = injectProductMeta(template, req.hostname);

      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
