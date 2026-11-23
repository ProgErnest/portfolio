export type ProjectSlug =
  "hsvp-hub" | "jed" | "auction-bids" | "library-management";
export type ProjectStatus = "active" | "completed" | "functional";

type LocalizedProject = {
  status: string;
  context: string;
  progress: string;
  summary?: string;
  problem?: string;
  audience?: string;
  features?: string;
  contributions?: string;
  result?: string;
  technologyNotes?: string;
  limitations?: string;
  openItems: string;
};

type LocalizedScreenshot = {
  alt: string;
  caption: string;
};

export type ProjectScreenshot = {
  src: string;
  width: number;
  height: number;
  en: LocalizedScreenshot;
  fr: LocalizedScreenshot;
};

export type Project = {
  slug: ProjectSlug;
  name: string;
  statusGroup: ProjectStatus;
  technologies: string[];
  repositoryUrl?: string;
  repositoryLabel?: string;
  screenshot?: ProjectScreenshot;
  en: LocalizedProject;
  fr: LocalizedProject;
};

export const projects: Project[] = [
  {
    slug: "hsvp-hub",
    name: "HSVP Hub",
    statusGroup: "active",
    technologies: [
      "Python 3.14",
      "Django 6.0.7",
      "PostgreSQL 18",
      "Tailwind CSS 4",
      "JavaScript",
      "Celery",
      "Mailpit",
      "WhiteNoise",
      "Git",
      "GitHub Actions",
    ],
    en: {
      status: "V1.0 functional · V2.0 redesign in progress",
      context:
        "An individual academic project developed during an internship and presented in an academic defense.",
      progress:
        "V1.0 is functional. The V2.0 redesign and core refactor are in progress, with a more integrated hospital ERP platform as the goal.",
      summary:
        "HSVP Hub is a hospital-management web platform for centralizing administrative and medical operations.",
      problem:
        "Scattered information and manual processes can make patient follow-up, coordination between services, and access to information more difficult.",
      audience:
        "Administrative and reception staff; doctors and practitioners; department managers; institution administrators; and other authorized hospital staff.",
      features:
        "Authentication and account management; permissions and access control; patient-record management; admissions; consultations and examinations; hospital stays and interdepartmental transfers; and appointments.",
      contributions:
        "Needs analysis and field information gathering; functional and technical design; database and process modeling; backend and frontend development; implementation of business modules and access control; testing and corrections; and contributions to a more integrated platform design.",
      result:
        "V1.0 is a functional web application covering several administrative and medical processes. The project was presented in an academic defense.",
      technologyNotes:
        "Python 3.14 — backend language; Django 6.0.7 — backend framework; PostgreSQL 18 — database; Tailwind CSS 4 — interface and styles; native JavaScript — frontend interactions; Celery — asynchronous processing; Mailpit — email testing environment; WhiteNoise — static-file serving; Git and GitHub Actions — version control and CI automation.",
      limitations:
        "Refactoring the V2.0 foundation; stabilizing V2.0; validating the new workflows; conducting further tests; verifying security and performance; and verifying deployment and real-world operating conditions.",
      openItems:
        "No measured outcomes are confirmed. Deployment in a hospital production environment has not been verified.",
    },
    fr: {
      status: "V1.0 fonctionnelle · refonte V2.0 en cours",
      context:
        "Un projet académique réalisé individuellement pendant un stage et présenté lors d’une soutenance.",
      progress:
        "La V1.0 est fonctionnelle. La refonte et le refactor du socle de la V2.0 sont en cours, avec pour objectif une plateforme ERP hospitalière plus intégrée.",
      summary:
        "HSVP Hub est une plateforme web de gestion hospitalière qui centralise des opérations administratives et médicales.",
      problem:
        "La dispersion des informations et les processus manuels peuvent compliquer le suivi des patients, la coordination entre services et l’accès aux informations.",
      audience:
        "Personnel administratif et de réception ; médecins et praticiens ; responsables de services ; administrateurs de l’établissement ; et autres personnels hospitaliers autorisés.",
      features:
        "Authentification et gestion des comptes ; autorisations et contrôle des accès ; gestion des dossiers patients ; admissions ; consultations et examens ; séjours hospitaliers et transferts interservices ; et rendez-vous.",
      contributions:
        "Analyse des besoins et collecte d’informations sur le terrain ; conception fonctionnelle et technique ; modélisation de la base de données et des processus ; développement backend et frontend ; implémentation des modules métier et de la gestion des accès ; tests et corrections ; et contribution à la conception d’une plateforme plus intégrée.",
      result:
        "La V1.0 est une application web fonctionnelle couvrant plusieurs processus administratifs et médicaux. Le projet a fait l’objet d’une soutenance académique.",
      technologyNotes:
        "Python 3.14 — langage backend ; Django 6.0.7 — framework backend ; PostgreSQL 18 — base de données ; Tailwind CSS 4 — interface et styles ; JavaScript natif — interactions frontend ; Celery — traitements asynchrones ; Mailpit — environnement de test des e-mails ; WhiteNoise — distribution des fichiers statiques ; Git et GitHub Actions — gestion du code et automatisation CI.",
      limitations:
        "Refonte du socle de la V2.0 ; stabilisation de la V2.0 ; validation des nouveaux workflows ; tests approfondis ; vérification de la sécurité et des performances ; et vérification du déploiement et des conditions d’exploitation réelles.",
      openItems:
        "Aucun résultat mesuré n’est confirmé. Le déploiement en production hospitalière n’a pas été vérifié.",
    },
  },
  {
    slug: "jed",
    name: "JED",
    statusGroup: "completed",
    technologies: [
      "Python",
      "Django 6.1.2",
      "PostgreSQL",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    screenshot: {
      src: "/images/projects/jed/Screenshot 2026-11-22 at 18-46-22 Indicateurs · Boutique.png",
      width: 1920,
      height: 2300,
      en: {
        alt: "JED shop indicators dashboard",
        caption:
          "Interface capture. All displayed names and figures are fictional examples, not project results.",
      },
      fr: {
        alt: "Tableau de bord des indicateurs de la boutique JED",
        caption:
          "Capture de l’interface. Les noms et montants affichés sont des exemples fictifs, pas des résultats du projet.",
      },
    },
    en: {
      status: "Implementation complete · deployed",
      context: "A client project implemented individually.",
      progress: "The implementation is complete and deployed.",
      features:
        "Sales management; inventory management; expense management; and report management.",
      openItems:
        "The deployment environment and measured outcomes have not been specified.",
    },
    fr: {
      status: "Implémentation terminée · application déployée",
      context: "Un projet client réalisé individuellement.",
      progress: "L’implémentation est terminée et l’application est déployée.",
      features:
        "Gestion des ventes ; gestion des stocks ; gestion des dépenses ; et gestion des rapports.",
      openItems:
        "L’environnement de déploiement et les résultats mesurés n’ont pas été précisés.",
    },
  },
  {
    slug: "auction-bids",
    name: "Auction Bids",
    statusGroup: "active",
    technologies: ["PHP 8.2+", "Symfony 7.4", "API Platform", "PostgreSQL"],
    screenshot: {
      src: "/images/projects/auction-bids/Screenshot 2026-11-22 at 20-47-01 Connexion — BidSphere.png",
      width: 360,
      height: 760,
      en: {
        alt: "BidSphere sign-in screen",
        caption:
          "Sign-in interface capture. The email and masked password are fictional placeholders, not account credentials.",
      },
      fr: {
        alt: "Écran de connexion de BidSphere",
        caption:
          "Capture de l’interface de connexion. L’adresse et le mot de passe masqué sont des exemples fictifs, pas des identifiants de compte.",
      },
    },
    en: {
      status: "Partially functional · reconstruction in progress",
      context: "A personal project developed individually.",
      progress:
        "The project is partially functional and is currently being reconstructed.",
      openItems:
        "The project remains partially functional and under reconstruction. No further feature or outcome claims are made.",
    },
    fr: {
      status: "Partiellement fonctionnel · reconstruction en cours",
      context: "Un projet personnel réalisé individuellement.",
      progress:
        "Le projet est partiellement fonctionnel et en cours de reconstruction.",
      openItems:
        "Le projet reste partiellement fonctionnel et en reconstruction. Aucune autre fonctionnalité ni aucun résultat ne sont revendiqués.",
    },
  },
  {
    slug: "library-management",
    name: "Library Management",
    statusGroup: "functional",
    technologies: ["Django", "Python", "Celery", "Redis", "Tailwind CSS"],
    repositoryUrl: "https://github.com/ProgErnest/library-project-django",
    repositoryLabel: "library-project-django",
    screenshot: {
      src: "/images/projects/library-management/Screenshot 2026-11-22 at 18-03-36 Bibliothèque - Livres.png",
      width: 1920,
      height: 910,
      en: {
        alt: "Library book catalog",
        caption:
          "Book catalog interface. The account and availability figures shown are fictional examples.",
      },
      fr: {
        alt: "Catalogue des livres de la bibliothèque",
        caption:
          "Interface du catalogue. Le compte et les données de disponibilité affichés sont des exemples fictifs.",
      },
    },
    en: {
      status: "V1 functional",
      context: "A personal project developed individually.",
      progress:
        "V1 is functional. Workflows and user experience still need improvement.",
      openItems:
        "V1 is functional. Workflow and UX improvements remain; no further workflow or outcome claims are made.",
    },
    fr: {
      status: "V1 fonctionnelle",
      context: "Un projet personnel réalisé individuellement.",
      progress:
        "La V1 est fonctionnelle. Les workflows et l’expérience utilisateur restent à améliorer.",
      openItems:
        "La V1 est fonctionnelle. Des améliorations des workflows et de l’UX restent à faire ; aucun autre workflow ni résultat n’est revendiqué.",
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
