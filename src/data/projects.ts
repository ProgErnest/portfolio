export type ProjectSlug =
  "hsvp-hub" | "jed" | "auction-bids" | "library-management";
export type ProjectStatus = "active" | "pending" | "functional";

type LocalizedProject = {
  status: string;
  context: string;
  progress: string;
};

export type Project = {
  slug: ProjectSlug;
  name: string;
  statusGroup: ProjectStatus;
  en: LocalizedProject;
  fr: LocalizedProject;
};

export const projects: Project[] = [
  {
    slug: "hsvp-hub",
    name: "HSVP Hub",
    statusGroup: "active",
    en: {
      status: "V1.0 functional · V2.0 redesign in progress",
      context:
        "A university project developed progressively in an internship context and defended academically.",
      progress:
        "V1.0 is functional. The V2.0 redesign and refactor are in progress.",
    },
    fr: {
      status: "V1.0 fonctionnelle · refonte V2.0 en cours",
      context:
        "Un projet universitaire développé progressivement dans un contexte de stage et soutenu académiquement.",
      progress:
        "La V1.0 est fonctionnelle. La refonte et le refactor de la V2.0 sont en cours.",
    },
  },
  {
    slug: "jed",
    name: "JED",
    statusGroup: "pending",
    en: {
      status: "Client testing and acceptance pending",
      context: "A client project implemented individually.",
      progress:
        "Implementation is complete. Client testing and acceptance are pending.",
    },
    fr: {
      status: "Tests et acceptation client en attente",
      context: "Un projet client réalisé individuellement.",
      progress:
        "L’implémentation est terminée. Les tests et l’acceptation client sont en attente.",
    },
  },
  {
    slug: "auction-bids",
    name: "Auction Bids",
    statusGroup: "active",
    en: {
      status: "Partially functional · reconstruction in progress",
      context: "A personal project developed individually.",
      progress:
        "The project is partially functional and is currently being reconstructed.",
    },
    fr: {
      status: "Partiellement fonctionnel · reconstruction en cours",
      context: "Un projet personnel réalisé individuellement.",
      progress:
        "Le projet est partiellement fonctionnel et en cours de reconstruction.",
    },
  },
  {
    slug: "library-management",
    name: "Library Management",
    statusGroup: "functional",
    en: {
      status: "V1 functional",
      context: "A personal project developed individually.",
      progress:
        "V1 is functional. Workflows and user experience still need improvement.",
    },
    fr: {
      status: "V1 fonctionnelle",
      context: "Un projet personnel réalisé individuellement.",
      progress:
        "La V1 est fonctionnelle. Les workflows et l’expérience utilisateur restent à améliorer.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectPath(slug: string, lang: "en" | "fr"): string {
  const project = getProject(slug);

  if (!project) {
    throw new Error(`Unknown project slug: ${slug}`);
  }

  return lang === "fr"
    ? `/fr/projets/${project.slug}/`
    : `/projects/${project.slug}/`;
}
