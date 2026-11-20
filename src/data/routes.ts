const routePairs = {
  "/": "/fr/",
  "/about/": "/fr/a-propos/",
  "/projects/": "/fr/projets/",
  "/projects/hsvp-hub/": "/fr/projets/hsvp-hub/",
  "/projects/jed/": "/fr/projets/jed/",
  "/projects/auction-bids/": "/fr/projets/auction-bids/",
  "/projects/library-management/": "/fr/projets/library-management/",
  "/skills/": "/fr/competences/",
  "/experience/": "/fr/experience/",
  "/contact/": "/fr/contact/",
  "/design-system/": "/fr/design-system/",
} as const;

type EnglishRoute = keyof typeof routePairs;

export function getLocalizedPath(
  currentPath: string,
  targetLanguage: "en" | "fr",
): string | null {
  if (targetLanguage === "fr") {
    return routePairs[currentPath as EnglishRoute] ?? null;
  }

  const englishPath = Object.entries(routePairs).find(
    ([, frenchPath]) => frenchPath === currentPath,
  )?.[0] as EnglishRoute | undefined;

  return englishPath ?? null;
}

export const pageRoutes = {
  home: { en: "/", fr: "/fr/" },
  about: { en: "/about/", fr: "/fr/a-propos/" },
  projects: { en: "/projects/", fr: "/fr/projets/" },
  skills: { en: "/skills/", fr: "/fr/competences/" },
  experience: { en: "/experience/", fr: "/fr/experience/" },
  contact: { en: "/contact/", fr: "/fr/contact/" },
  designSystem: { en: "/design-system/", fr: "/fr/design-system/" },
} as const;
