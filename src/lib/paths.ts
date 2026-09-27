import { otherLocale, type Locale } from "@/i18n/strings";

const pageSlugs = {
  home: "",
  exhibition: "exhibition",
  artists: "artists",
} as const;

export type PageKey = keyof typeof pageSlugs;

export type HomeAnchor = "top" | "receive" | "visiting" | "place";

export function localePath(locale: Locale, page: PageKey = "home", hash?: HomeAnchor): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const slug = pageSlugs[page];
  const path = slug ? `/${locale}/${slug}` : `/${locale}`;
  const withHash = hash && hash !== "top" ? `#${hash}` : hash === "top" ? "#top" : "";
  return `${base}${path}${withHash}`;
}

export function switchLocalePath(locale: Locale, page: PageKey): string {
  return localePath(otherLocale(locale), page);
}

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
