// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const SITE = "https://arcadia-wellness.github.io";
const BASE = "/art-of-receiving-website";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
    routing: {
      prefixDefaultLocale: true,
      // Keep root under our control: Astro's auto 302 emits a 2s meta-refresh on Pages.
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "zh",
        locales: {
          zh: "zh-CN",
          en: "en-CA",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
