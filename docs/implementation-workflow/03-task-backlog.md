# Backlog initial

Ce backlog traduit les travaux réellement proposés par la roadmap créative et
les blocages confirmés de la baseline. Il ne rend pas les changements
applicatifs autorisés.

## Légende

- **Priorité :** Haute = gate ou risque qui peut bloquer la livraison; Moyenne =
  incrément important; Basse = option conditionnelle.
- **Complexité :** S = petite; M = moyenne; L = grande; XL = exploration à
  limiter.
- **Statut :** `En attente`, `Bloqué`, `Conditionnel` ou `En cours`. Les tâches
  dépendant de validation ne démarrent pas avant le gate concerné.

## P0 — Initialisation

### P0-01 — Établir la baseline et le workflow

- **Description :** produire et faire valider les documents de pilotage P0.
- **Objectif :** cadrer la suite sur l’état réel du dépôt et rendre visibles les
  validations humaines.
- **Fichiers/composants :** `docs/implementation-workflow/`.
- **Dépendances :** aucune.
- **Priorité / complexité :** Haute / M.
- **Critères d’acceptation :** les documents requis existent; l’état Git, les
  versions, routes, limites, risques et contrôles sont vérifiables; aucun code
  applicatif n’a changé; validation utilisateur explicite enregistrée.
- **Tests nécessaires :** revue des neuf fichiers, `git status`, cohérence des
  liens internes et comparaison des facts avec les sources.
- **Statut initial :** En attente de validation utilisateur.

## P1 — Architecture technique

### P1-01 — Valider les choix créatifs et le périmètre du premier incrément

- **Description :** obtenir les arbitrages expressément laissés ouverts
  (thèse, asymétrie, Hero/EP, traitement des preuves, premier prototype SVG).
- **Objectif :** empêcher qu’un agent transforme une proposition en décision
  approuvée.
- **Fichiers/composants :** `docs/creative-experience-upgrade/01`,
  `08`, `10`; routes existantes concernées à déterminer après arbitrage.
- **Dépendances :** P0-01 validée.
- **Priorité / complexité :** Haute / S.
- **Critères d’acceptation :** décisions consignées avec propriétaire et portée;
  limites de contenu/preuve confirmées; P2 peut être planifiée sans ambiguïté.
- **Tests nécessaires :** revue des décisions, de la portée bilingue et des
  critères de confidentialité.
- **Statut initial :** Bloqué jusqu’à validation de P0 et arbitrage humain.

### P1-02 — Confirmer les contrats techniques incrémentaux

- **Description :** définir l’adaptation des propositions créatives aux routes,
  données, composants et cycle de vie Astro observés.
- **Objectif :** conserver le rendu statique et les comportements existants;
  éviter une migration ou dépendance non motivée.
- **Fichiers/composants :** `src/data/routes.ts`, `src/data/projects.ts`,
  `src/layouts/Layout.astro`, `src/components/layout/Navigation.astro`,
  `src/styles/global.css`.
- **Dépendances :** P1-01.
- **Priorité / complexité :** Haute / M.
- **Critères d’acceptation :** routes EN/FR, fallback sans JS, hooks éventuels,
  nettoyage et stratégie réduite-motion sont spécifiés; le besoin d’une
  dépendance externe est démontré ou celle-ci est écartée.
- **Tests nécessaires :** `npm run check`, `npm run build`, inventaire de
  dépendances, inspection de `ClientRouter`; navigation/back-forward automatisée
  reste un gate avant P3 si le routeur est adopté.
- **Statut après P1 :** Terminé; décision native-first, routeur intégré reporté
  à P3, GSAP/Three non installés.

### P1-03 — Lever le blocage de publication du dépôt Auction Bids

- **Description :** obtenir la confirmation que `.env.prod` a été supprimé de
  l’historique Git du dépôt externe avant toute décision d’ajout de lien.
- **Objectif :** éviter de diriger les visiteurs vers un dépôt susceptible
  d’exposer des secrets.
- **Fichiers/composants :** entrée Auction Bids de `src/data/projects.ts` et
  fiches EN/FR; dépôt externe hors périmètre local.
- **Dépendances :** confirmation du propriétaire ou du mainteneur autorisé;
  aucune inspection/copie des valeurs secrètes dans le workflow.
- **Priorité / complexité :** Haute / S.
- **Critères d’acceptation :** confirmation documentée de suppression de
  l’historique et du dépôt publié; toute valeur qui aurait été exposée est
  révoquée/renouvelée par le mainteneur; lien non publié tant que le gate n’est
  pas satisfait.
- **Tests nécessaires :** contrôle du lien généré dans les deux langues après
  autorisation; scan de diff pour absence de secret.
- **Statut initial :** Bloqué; le propriétaire prévoit de supprimer le fichier
  de l’historique ultérieurement; suppression non encore confirmée.

### P1-04 — Confirmer l’autorisation des captures HSVP-Hub fournies

- **Description :** enregistrer l’autorisation du propriétaire concernant les
  captures HSVP fournies.
- **Objectif :** distinguer les captures fictives autorisées de toute donnée
  réelle ou information confidentielle qui resterait interdite.
- **Fichiers/composants :** les captures existantes sous `docs/Captures/`;
  aucune modification des fichiers n’est requise pour enregistrer l’accord.
- **Dépendances :** aucune; l’utilisateur a confirmé l’autorisation le
  23 novembre 2026.
- **Priorité / complexité :** Haute / M.
- **Critères d’acceptation :** accord explicite consigné : toutes les captures
  fournies sont créées par l’utilisateur, utilisent des données fictives et
  peuvent être utilisées telles quelles, libellés visibles compris; cet accord
  ne s’étend pas à d’autres données ou affirmations.
- **Tests nécessaires :** lors de leur inclusion ultérieure, vérifier que les
  seuls fichiers utilisés sont les captures approuvées, leurs légendes sont
  localisées et le build ne contient pas d’autres éléments HSVP non autorisés.
- **Statut initial :** Terminé après confirmation utilisateur le 23 novembre
  2026; visibilité externe du dépôt non vérifiée.

## P2 — Design system et Motion System

### P2-01 — Réaliser le spécimen bilingue des composants approuvés

- **Description :** composer les 16 motifs sélectionnés dans un spécimen
  interactif isolé avant leur intégration aux pages de production.
- **Objectif :** éprouver la direction validée avec l’identité et les tokens
  existants.
- **Fichiers/composants :** `src/components/DesignSystem.astro`,
  `src/components/animations/MotionSpecimen.astro`,
  `src/styles/global.css`, `src/styles/motion-specimen.css`.
- **Dépendances :** P1-01, P1-02.
- **Priorité / complexité :** Moyenne / M.
- **Critères d’acceptation :** les 16 motifs sont identifiables; aucune preuve
  fictive présentée comme réelle; thèmes clair/sombre et copies EN/FR lisibles;
  compositions responsive sans chevauchement.
- **Tests nécessaires :** navigateur EN/FR, bureau/tablette/mobile, clavier,
  thème, `prefers-reduced-motion`, lint, check et build.
- **Statut :** Terminé; spécimen ajouté sur `/design-system/` et
  `/fr/design-system/`, sans généralisation aux pages de production.

### P2-02 — Établir les primitives de mouvement minimales

- **Description :** après validation du spécimen, ajouter uniquement les
  tokens/effets nécessaires et un contrat de nettoyage si une amélioration
  scriptée est justifiée.
- **Objectif :** conserver l’état statique comme source de vérité.
- **Fichiers/composants :** `src/styles/global.css`; modules futurs à nommer
  seulement si besoin démontré.
- **Dépendances :** P2-01.
- **Priorité / complexité :** Moyenne / M.
- **Critères d’acceptation :** mouvement réduit et absence de JS gardent tout le
  contenu; aucun effet uniquement au survol; listeners/observers nettoyés si
  ajoutés; pas de bibliothèque ajoutée par défaut.
- **Tests nécessaires :** prefers-reduced-motion, clavier/tactile, navigation
  répétée si lifecycle scripté, HTML sans JS.
- **Statut :** Terminé; tokens et primitives CSS/natives ajoutés, interactions
  locales limitées au spécimen et aucune bibliothèque ajoutée.

### P2-03 — Tracer les sélections créatives utilisateur

- **Description :** consigner les composants approuvés par section à partir de
  l’atelier interactif.
- **Objectif :** fournir à P3/P4 une liste stable, sans invention ni
  généralisation implicite.
- **Fichiers/composants :** `docs/implementation-workflow/08-creative-selections.md`.
- **Dépendances :** arbitrage humain explicite.
- **Priorité / complexité :** Haute / S.
- **Critères d’acceptation :** chaque identifiant retenu appartient à une
  section exacte; les adaptations responsive, clavier et reduced-motion sont
  explicites; aucun composant non sélectionné n’est considéré approuvé.
- **Tests nécessaires :** revue croisée avec l’inventaire interactif.
- **Statut :** Terminé; sélection consignée et démontrée dans le spécimen du
  système de design, sans intégration aux pages de production.

## P3 — Expérience globale et navigation

### P3-01 — Harmoniser le shell et ses états

- **Description :** intégrer les éléments de continuité retenus au shell sans
  retirer navigation, langue, thème, focus ni comportement mobile.
- **Objectif :** maintenir une navigation fiable pendant les évolutions.
- **Fichiers/composants :** `Navigation.astro`, `Footer.astro`,
  `Layout.astro`, `routes.ts`, styles associés.
- **Dépendances :** P2-02.
- **Priorité / complexité :** Haute / M.
- **Critères d’acceptation :** mêmes destinations et équivalences EN/FR;
  disclosure mobile clavier/Escape; état de route textuel; pas de retard ou
  blocage de navigation.
- **Tests nécessaires :** toutes routes, switch langue avec et sans équivalent,
  thème, clavier, viewports mobile/tablette/bureau.
- **Statut :** Terminé pour l’audit, le shell responsive, le prototype isolé,
  les états clavier/mobile/thème/langue et les tests disponibles.

### P3-02 — Composer l’accueil autour de la preuve et du champ EP

- **Description :** appliquer l’identité Home validée et son amélioration
  éventuelle au composant statique existant.
- **Objectif :** articuler positionnement vérifié, liens de trajectoire et
  projets sans masquer le contenu.
- **Fichiers/composants :** `src/components/home/Home.astro`,
  `src/pages/index.astro`, `src/pages/fr/index.astro`.
- **Dépendances :** P2-01, P2-02, P3-01; informations de contenu vérifiées.
- **Priorité / complexité :** Haute / L.
- **Critères d’acceptation :** récit complet sans JS; parité EN/FR; aucune
  affirmation d’expertise, d’état ou de résultat non vérifiée; aucune hausse
  injustifiée du chargement initial.
- **Tests nécessaires :** routes `/` et `/fr/`, responsive, clavier, mouvement
  réduit, liens et décalage de mise en page autour du Hero.
- **Statut :** Terminé pour la direction statique H01/H02/H03 approuvée;
  aucune composition immersive supplémentaire n’a été intégrée.

## P4 — Implémentation des pages

### P4-Accueil — Finaliser les motifs H01, H02 et H03

- **Description :** conserver l’identité orbitale statique, le manifeste
  cinétique native CSS et le signal de défilement réel sur les pages
  d’accueil EN/FR.
- **Objectif :** finir l’intégration de production de `H01/H02/H03` sans
  ajouter de moteur, de canvas ni de comportement qui masque le contenu.
- **Fichiers/composants :** `src/components/home/Home.astro`,
  `src/pages/index.astro`, `src/pages/fr/index.astro`.
- **Dépendances :** P3-02, sélection créative approuvée H01/H02/H03.
- **Priorité / complexité :** Haute / M.
- **Critères d’acceptation :** parité EN/FR, liens orbitaux explicites,
  titre/actions conservés, signal lié à la vraie section projets, mobile
  lisible, clavier/tactile/reduced motion fonctionnels, aucun débordement.
- **Tests nécessaires :** 390/768/1280 px, clavier, reduced motion, liens
  internes, HTML statique, format, lint, check et build.
- **Statut :** En attente de validation humaine après vérification.

### P4-01 — Conserver et affiner l’index de projets

- **Description :** appliquer le traitement visuel retenu à l’index et à ses
  filtres natifs.
- **Objectif :** rendre les états de projets compréhensibles sans perdre le
  fallback CSS ni le contexte.
- **Fichiers/composants :** `ProjectsIndex.astro`, `src/styles/internal-pages.css`,
  `src/data/projects.ts`, pages EN/FR.
- **Dépendances :** P3-02.
- **Priorité / complexité :** Moyenne / M.
- **Critères d’acceptation :** filtres utilisables au clavier; statut exact,
  ordre stable, libellés localisés; pas de compte ou résultat non calculé.
- **Tests nécessaires :** chaque radio, focus visible, CSS `:has()` et fallback,
  routes et textes EN/FR.
- **Statut initial :** En attente.

### P4-02 — Définir les preuves et leur interaction accessible

- **Description :** standardiser les cadres, dimensions, légendes et
  agrandissement éventuel des preuves autorisées.
- **Objectif :** rendre les captures compréhensibles et accessibles sans
  exagérer leur valeur probante.
- **Fichiers/composants :** `ProjectCaseStudy.astro`, `src/data/projects.ts`,
  styles de fiche, images sélectionnées de `public/images/projects/`.
- **Dépendances :** P1-04 (autorisation obtenue); P2-02; P3-01.
- **Priorité / complexité :** Moyenne / M.
- **Critères d’acceptation :** texte alternatif/caption EN/FR, dimensions
  connues, fallback lien/affichage statique; contrôle clavier, fermeture et
  retour du focus si dialog.
- **Tests nécessaires :** clavier/Escape/focus, tactile, mouvement réduit,
  chargement d’image, légendes et absence d’images restreintes dans `dist/`.
- **Statut initial :** En attente; preuve HSVP autorisée sous les limites
  consignées en P1-04.

### P4-03 — Affiner la fiche JED sans élargir les revendications

- **Description :** organiser le récit et la capture approuvée autour des
  fonctionnalités confirmées.
- **Objectif :** montrer le projet client sans inventer d’acceptation, de
  résultats ou de lien de dépôt.
- **Fichiers/composants :** `src/data/projects.ts`, `ProjectCaseStudy.astro`,
  routes `/projects/jed/` et `/fr/projets/jed/`.
- **Dépendances :** P4-02.
- **Priorité / complexité :** Moyenne / M.
- **Critères d’acceptation :** statut « implémentation terminée/déployée » selon
  la confirmation existante; aucun chiffre, acceptation ou repo JED; capture
  avec mention des exemples fictifs.
- **Tests nécessaires :** parité EN/FR, image et caption, inspection des liens
  et diff de contenu.
- **Statut initial :** En attente.

### P4-04 — Affiner la fiche Library Management en séparant V1 et suite

- **Description :** distinguer les fonctionnalités V1 confirmées de la voie
  d’améliorations workflow/UX.
- **Objectif :** ne pas présenter une amélioration future comme livrée.
- **Fichiers/composants :** `src/data/projects.ts`, `ProjectCaseStudy.astro`,
  routes `/projects/library-management/` et `/fr/projets/library-management/`.
- **Dépendances :** P4-02.
- **Priorité / complexité :** Moyenne / M.
- **Critères d’acceptation :** V1 et statut exacts; lien public existant
  préservé; idées futures identifiées comme travaux restants.
- **Tests nécessaires :** parité EN/FR, lien externe, capture/caption et revue
  factuelle.
- **Statut initial :** En attente.

### P4-05 — Maintenir Auction Bids en reconstruction

- **Description :** toute évolution de la fiche garde l’état partiel et la
  reconstruction; n’ajouter aucun lien au dépôt sans P1-03 résolue.
- **Objectif :** ne pas laisser une composition immersive suggérer un projet
  achevé ou publiable.
- **Fichiers/composants :** `src/data/projects.ts`, `ProjectCaseStudy.astro`,
  routes `/projects/auction-bids/` et `/fr/projets/auction-bids/`.
- **Dépendances :** P4-02; P1-03 est obligatoire uniquement pour un éventuel
  lien vers le dépôt.
- **Priorité / complexité :** Haute / M.
- **Critères d’acceptation :** statut partiel/en reconstruction visible; capture
  avec placeholders fictifs; aucun pourcentage ni promesse; lien externe absent
  tant que le gate n’est pas levé.
- **Tests nécessaires :** recherche de lien dans HTML EN/FR, caption, status et
  inspection des changements.
- **Statut initial :** En attente pour la fiche; lien du dépôt bloqué.

### P4-06 — Construire le récit protégé HSVP-Hub

- **Description :** structurer uniquement les catégories et faits explicitement
  autorisés, avec limites et état V1/V2.
- **Objectif :** expliquer un cas académique avec les captures fournies et
  approuvées, sans donnée réelle ni revendication de déploiement non confirmé.
- **Fichiers/composants :** entrée HSVP-Hub de `src/data/projects.ts`,
  `ProjectCaseStudy.astro`, routes localisées.
- **Dépendances :** P4-02; P1-04 (autorisation obtenue) pour les captures
  fournies.
- **Priorité / complexité :** Haute / M.
- **Critères d’acceptation :** statut et portée autorisés exacts; captures
  fournies utilisables telles quelles selon l’accord utilisateur; aucune donnée
  réelle ou secrète ajoutée; absence de revendication de déploiement en
  production.
- **Tests nécessaires :** revue de contenu autorisée, inspection du HTML et de
  `dist/`, EN/FR, aucun asset HSVP public.
- **Statut initial :** En attente; captures fournies approuvées, sous réserve
  d’une intégration conforme aux critères.

## P5 — Expériences immersives avancées

### P5-01 — Évaluer un unique prototype spatial, conditionnel

- **Description :** éprouver une seule relation (par exemple EP Home ou carte
  de catégories) en HTML/SVG; évaluer Three.js seulement si cette preuve échoue.
- **Objectif :** apporter une compréhension mesurable, pas une décoration.
- **Fichiers/composants :** route choisie après P1; fichiers futurs à préciser
  dans le plan de mission avant édition.
- **Dépendances :** P4 pour la preuve concernée; arbitrage de P1-01; validation
  explicite avant Three.js.
- **Priorité / complexité :** Basse / L (XL si WebGL est autorisé).
- **Critères d’acceptation :** bénéfice documenté; fallback statique complet;
  lazy-load si lourd; mobile et reduced-motion; cleanup; aucun contenu
  confidentiel; retirer si le coût dépasse le bénéfice.
- **Tests nécessaires :** navigation clavier/tactile, reduced-motion,
  navigateur mobile et bureau, transfert/frame rate/mémoire comparés à la
  baseline avant toute option WebGL.
- **Statut initial :** Conditionnel; ne pas démarrer par défaut.

## P6 — Stabilisation et assurance qualité

### P6-01 — Harmoniser About, Skills, Experience et Contact

- **Description :** appliquer les spécifications retenues et corriger les
  divergences d’accueil/pages à partir des informations déjà confirmées.
- **Objectif :** préserver un récit professionnel cohérent, exact et localisé.
- **Fichiers/composants :** `AboutPage.astro`, `SkillsPage.astro`,
  `ExperiencePage.astro`, `ContactPage.astro`, `Home.astro` et routes EN/FR.
- **Dépendances :** P3-02 et les patterns réutilisables de P4.
- **Priorité / complexité :** Moyenne / L.
- **Critères d’acceptation :** faits et dates vérifiés; aucun niveau de maîtrise
  inventé; mêmes informations et affordances en EN/FR; divergence entre Home,
  Experience et Contact supprimée.
- **Tests nécessaires :** routes EN/FR, dates et destinations, traduction,
  clavier et responsive.
- **Statut initial :** En attente.

### P6-02 — Compléter la validation qualité et la readiness technique

- **Description :** exécuter les contrôles automatisés/manuels prévus, combler
  seulement les lacunes nécessaires et consigner les résultats.
- **Objectif :** détecter régressions, liens brisés, problèmes d’accessibilité,
  métadonnées et confidentialité avant release readiness.
- **Fichiers/composants :** scripts/tests établis; `Layout.astro`, routes,
  données, assets et configuration si autorisés.
- **Dépendances :** incréments sélectionnés P2–P5; pas d’obligation de réaliser
  P5-01 si l’expérience statique suffit.
- **Priorité / complexité :** Haute / L.
- **Critères d’acceptation :** checks disponibles passants; routes et langues
  complètes; findings et mesures documentés; aucun secret ni preuve non
  autorisée dans les sorties; pas de faux score qualité.
- **Tests nécessaires :** stratégie entière de
  [`06-test-strategy.md`](./06-test-strategy.md).
- **Statut initial :** En attente.

## P7 — Livraison

### P7-01 — Préparer une release vérifiable et réversible

- **Description :** vérifier domaine, hébergement, build et prévisualisation;
  préparer une checklist et rollback.
- **Objectif :** rendre la livraison prête sans effectuer de publication.
- **Fichiers/composants :** `docs/DEPLOYMENT.md` et configuration à convenir.
- **Dépendances :** P6-02; confirmation du domaine/hébergement et autorisation
  humaine de toute configuration externe.
- **Priorité / complexité :** Moyenne / M.
- **Critères d’acceptation :** readiness, routes, assets, metadata, rollback et
  responsables documentés; aucun DNS, déploiement, push ou publication exécuté
  sans approbation explicite distincte.
- **Tests nécessaires :** build final, smoke tests de prévisualisation et
  contrôle final de confidentialité après autorisation.
- **Statut initial :** En attente; aucune mise en production autorisée.
