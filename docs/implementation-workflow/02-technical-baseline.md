# Baseline technique — audit P0

**Date :** 23 novembre 2026  
**Nature :** observation du code et exécution des commandes présentes, pas un
audit de production ni un audit de sécurité certifié.

## État du dépôt

- Référentiel local : `ProgErnest/portfolio`. À la vérification initiale P0,
  HEAD était `05ef729` (`Finalisation de G5`) et la branche annonçait deux
  commits d’avance. Au contrôle P1, HEAD et `origin/main` étaient alignés sur
  `18592d0` (`Motion workflow`), avec le worktree propre avant les changements
  documentaires P1.
- Modifications préexistantes à préserver : `docs/DEVELOPMENT_ROADMAP.md`
  modifié; `docs/creative-experience-upgrade/`,
  `docs/experience-motion-overhaul/` et
  `docs/creative-experience-upgrade.zip` non suivis.
- Aucun changement de code applicatif n’a été réalisé pendant P0.
- Le dépôt comporte environ 126 fichiers suivis avant les ajouts de workflow.
- L’archive `docs/Captures/` contient 56 captures suivies, dont 37 dans
  `docs/Captures/hsvp-hub/`. Elles ne sont pas dans `public/`. La documentation
  du projet signale qu’au moins une capture HSVP montre des libellés
  institutionnels/de processus. Le contenu n’a pas été ouvert pendant cet
  audit. Le 23 novembre 2026, l’utilisateur a confirmé que toutes les captures
  fournies sont de sa création, n’utilisent aucune donnée réelle et sont
  autorisées à l’utilisation telles quelles, y compris les libellés visibles.
  La visibilité externe du dépôt reste inconnue.

## Technologies réelles

| Domaine                                                          | État observé                                                          |
| ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| Rendu                                                            | Astro 7.4.12 en mode statique (`output: "static"`).                   |
| Langage                                                          | TypeScript 6.0.3; `tsconfig.json` étend `astro/tsconfigs/strict`. Les |
| fichiers Astro utilisent principalement des types JSDoc.         |
| Styles                                                           | Tailwind CSS 4.3.5 via `@tailwindcss/vite` dans `astro.config.mjs`;   |
| styles globaux et de pages en CSS, y compris CSS non utilitaire. |
| Runtime local                                                    | Node 24.13.0 et npm 11.21.2 lors de l’audit; `engines.node`           |
| déclare `>=22.23.4`.                                             |
| Outillage                                                        | ESLint 10.15.0, `eslint-plugin-astro` 1.2.2, Prettier 3.10.1 et       |
| `prettier-plugin-astro` 1.1.2.                                   |
| Dépendances d’exécution                                          | Astro, Tailwind CSS et son plugin Vite. Pas de React,                 |
| GSAP, Three.js, Lenis ou dépendance de test déclarée.            |
| Rendu/client                                                     | HTML statique; scripts ciblés pour thème et menu. Aucun               |
| framework d’hydratation observé.                                 |

Les versions ci-dessus sont celles de l’installation vérifiée (`npm ls
--depth=0`) et du manifeste. Aucune mise à jour de dépendance n’a été effectuée.

## Organisation et routes

- `src/pages/` fournit les routes Astro; `src/pages/fr/` fournit les routes
  françaises.
- `src/data/routes.ts` contient le mapping EN/FR et
  `getLocalizedPath()`. Le sélecteur de langue est désactivé si aucune
  correspondance n’est trouvée.
- `src/data/projects.ts` porte les quatre projets, leurs statuts, textes
  localisés, technologies, preuves et liens. Les routes dynamiques des fiches
  sont générées depuis cette liste en anglais et en français.
- `src/layouts/Layout.astro` assemble le document, les métadonnées de base, le
  shell, le lien d’évitement et les polices.
- Réutilisables principaux : `Navigation.astro`, `Footer.astro`, `PageFrame`,
  `ProjectCaseStudy`, `ProjectsIndex`, `Home`, pages About/Skills/Experience/
  Contact, `Button`, `Badge`, `ThemeToggle` et `DesignSystem`.
- La construction vérifiée produit 22 pages : accueil, pages intérieures,
  système de design et huit fiches projet localisées.
- Aucun fichier de page 404 dédié n’a été observé.

## Fonctionnalités déjà présentes

- Navigation principale et pied de page localisés; lien de langue vers la page
  équivalente si elle existe.
- Menu mobile basé sur `<details>` et gestion clavier Escape.
- Thème clair/sombre avec préférence système initiale et persistance locale.
- Page d’accueil avec liens vers les quatre projets et sections de présentation.
- Index filtrable de projets au moyen de radios natifs et CSS `:has()`, sans
  JavaScript de filtrage.
- Fiches localisées générées depuis les données typées; légendes localisées,
  images dimensionnées et chargées avec `loading="lazy"`/`decoding="async"`.
- Pages About, Skills, Experience, Contact et spécimens du système de design.
- Lien de dépôt externe sur Library Management seulement; JED n’a pas de lien
  de dépôt et Auction Bids n’en a pas.
- Pas de formulaire, serveur applicatif ni base de données dans ce portfolio.

## Navigation, langues et contenu

Les routes EN sont à la racine; les routes FR utilisent `/fr/` et des slugs
localisés. La plupart des pages possèdent des copies localisées explicites.
Les fiches de projet utilisent les mêmes données typées pour générer les deux
langues. La navigation comprend accueil, À propos, projets, compétences,
expérience et contact; le système de design est aussi lié au pied de page.

Écarts de contenu à traiter lors d’une mission dédiée, sans correction dans P0 :

- L’accueil présente l’expérience professionnelle comme non confirmée alors que
  `ExperiencePage.astro` expose deux stages et dates, déjà détaillés dans le
  rapport G5. L’accueil dit aussi qu’aucun canal public n’est confirmé alors que
  la page Contact fournit des canaux publics.
- Les titres/descriptions Open Graph des fiches françaises sont assemblés en
  anglais dans les routes FR; vérifier la localisation des métadonnées.
- `docs/PENDING_INFORMATION.md` contient encore des éléments G0 (fournisseur
  d’agent et emplacement du dépôt) qui ne reflètent plus l’état constaté; leur
  actualisation relève d’une mission documentaire.
- Conserver les faits exacts du parcours lorsqu’on harmonise les copies EN/FR.

## Motion et expérience

- Aucun système partagé de motion, moteur d’animation, `IntersectionObserver`,
  View Transitions, `ClientRouter`, canvas ou WebGL n’a été observé dans le code
  applicatif.
- Le Hero utilise une composition CSS statique; les animations du site sont
  absentes à l’exception de transitions simples de composants de démarrage/
  primitives.
- `global.css` contient un fallback `prefers-reduced-motion` qui réduit
  animations, transitions et défilement doux.
- La navigation, le thème et le filtrage progressif sont les interactions
  actuellement vérifiées au niveau du code.
- Les cartes spatiales, dialogues de preuve et chorégraphies des documents
  créatifs sont des propositions, pas des fonctionnalités existantes.

## Configuration et qualité

Scripts déclarés : `dev`, `build`, `preview`, `astro`, `check`, `lint`,
`format`, `format:check`. Aucun script `test`, suite unitaire, Playwright ou
autre runner n’est configuré dans `package.json`.

Résultats de P0 :

| Contrôle                      | Résultat observé                                              |
| ----------------------------- | ------------------------------------------------------------- |
| `npm run format:check`        | Réussi; tous les fichiers ciblés sont formatés.               |
| `npm run lint`                | Réussi; aucune sortie d’erreur.                               |
| `npm run check`               | Réussi : 0 erreur, 0 warning, 30 indications de modernisation |
| JSDoc dans 37 fichiers Astro. |
| `npm run build`               | Réussi : 22 pages statiques, environ 11 secondes dans cet     |
| environnement.                |

Les 30 indications JSDoc sont des recommandations de modernisation, pas des
défauts bloquants; elles ne justifient pas un refactor global dans P0.

## Performance, chargement et limites

- Le site est statique et ne charge pas de JavaScript client provenant d’un
  framework; le build observé ne produit aucun fichier JavaScript dans
  `dist/_astro/`.
- Le site demande les familles Inter, Space Grotesk et JetBrains Mono à Google
  Fonts; cela crée une dépendance réseau tierce. `display=swap` et les polices
  de repli sont prévus.
- Les trois images dans `public/images/projects/` pèsent environ 29 KiB,
  128 KiB et 370 KiB (mesure du système de fichiers, taille non transférée
  mesurée). Il n’y a pas de variantes responsive ou de pipeline
  d’optimisation d’images observé.
- Les images des fiches ont dimensions, chargement différé et décodage
  asynchrone; le Hero n’introduit pas de média lourd.
- Les styles générés pendant le build mesurent environ 39 KiB au total avant
  gzip/br. Ce constat n’est pas une mesure de transfert réseau.
- Aucun score Lighthouse, Web Vitals, mesure mobile réelle, cache froid,
  budget de transfert ou test de charge n’a été effectué. Ne pas déclarer de
  seuil de performance atteint sur la base de cette baseline.
- Pas de sitemap, canonical, hreflang, politique robots ou 404 spécifique
  observé dans les sources examinées.

## Sécurité et confidentialité

- Pas de backend, API privée, authentification ou collecte côté serveur dans
  l’application inspectée; pas de secret identifié par nom parmi les fichiers
  suivis du portfolio.
- `.gitignore` ignore `.env` et `.env.production`, mais pas explicitement
  `.env.prod`; aucun fichier d’environnement de ce nom n’est suivi ici à la
  date de l’audit.
- Aucun audit de dépendances (`npm audit`), scanner de secrets, en-têtes HTTP
  de production, CSP ou revue complète de toutes les images n’a été exécuté.
- L’archive de captures HSVP-Hub suivie dans Git n’est pas copiée vers
  `public/`. Le rapport G5 antérieur excluait ces images; l’utilisateur a
  depuis explicitement autorisé l’utilisation de toutes les captures fournies
  telles quelles et confirmé qu’elles ne contiennent aucune donnée réelle.
  Cette décision couvre les libellés visibles dans ces captures uniquement et
  ne permet pas d’ajouter des données réelles, secrets ou détails confidentiels.
- L’origine et la visibilité externe du dépôt ne sont pas vérifiées dans cette
  mission.
- Le problème `.env.prod` signalé concerne le dépôt externe Auction Bids. Ne
  pas consulter ni republier le contenu du fichier; le lien demeure bloqué
  jusqu’à confirmation qu’il est supprimé ou assaini.

## Divergences avec les documents créatifs

Les références décrivent un travail futur : champ EP par route, compositions
asymétriques, preuves interactives, cartes SVG, interactions de sélection,
progression de routes et prototype spatial conditionnel. Le site présent ne
contient pas ces éléments à l’exception du monogramme EP, des listes de projets,
des captures existantes et de filtres CSS.

L’architecture proposée dans les références (modules `motion.ts`, composants
Reveal/RouteProgress/SystemMap, View Transitions) est indicative et n’existe pas
encore. Les filtres CSS actuels, leur fallback sans JS et le rendu Astro sont à
réutiliser plutôt que remplacés sans justification. Toutes les captures fournies
sont approuvées par l’utilisateur pour utilisation telles quelles; ne pas en
déduire d’autres faits que ce qu’elles montrent et n’ajouter aucune donnée réelle.

## Recommandations factuelles pour les missions suivantes

1. Obtenir la validation P0 et les arbitrages créatifs ouverts avant P1/P2.
2. Respecter l’autorisation donnée pour les captures HSVP fournies et conserver
   la limite stricte à ces fichiers et à leurs données fictives.
3. Résoudre le blocage externe `.env.prod` avant de créer un lien Auction Bids.
4. Harmoniser l’accueil avec les pages Experience et Contact à partir des
   informations déjà vérifiées, sous mission autorisée.
5. Réutiliser le filtrage CSS et le modèle de fiches, puis établir un contrat de
   preuve localisé et accessible avant tout enrichissement animé.
6. Ajouter les contrôles de contenu, accessibilité, liens et métadonnées aux
   tests; mesurer les performances réelles avant toute optimisation motivée par
   un chiffre.
7. Ne pas introduire de React, GSAP, Three.js ou migration de stack sans preuve
   de besoin, comparaison de coût et validation requise.
