  # P1 — Architecture technique du portfolio

  **Date :** 23 novembre 2026
  **Périmètre :** analyse de l’architecture, décisions de support motion, chargement
  et navigation, vérification des dépendances et des mécanismes présents.
  **Hors périmètre :** implémentation du Motion System P2, changements globaux de
  navigation/transitions P3, pages P4, publication, déploiement, commit et push.

  ## Résultat exécutif

  L’architecture retenue conserve Astro statique-first et n’ajoute aucune
  dépendance. HTML/CSS, SVG, Web Animations API et IntersectionObserver restent le
  chemin par défaut. Les animations ou scènes de page sont isolées et ne
  s’initialisent que si leur élément est présent, que le mouvement n’est pas
  réduit et que leur chargement est justifié.

  Astro 7.4.12 comprend le composant natif `ClientRouter`; il n’est pas activé
  dans le site. L’activation est reportée à P3, car les scripts de menu et de
  thème actuels interrogent le DOM et y posent leurs listeners au chargement du
  document. Ils ne constituent pas encore un contrat d’initialisation après
  remplacement de page.

  GSAP/ScrollTrigger et Three.js sont **facultatifs, non installés et non
  nécessaires à P1**. La conception ne choisit pas encore de séquence épinglée ni
  de relation que le SVG/HTML ne puisse montrer. Des prototypes réels avec ces
  packages seraient prématurés et ne remplaceraient pas les validations prévues
  pour P2, P3 et l’expérience spatiale conditionnelle.

  ## Architecture réelle vérifiée

  - Astro 7.4.12, génération statique, Tailwind CSS 4.3.5, TypeScript 6.0.3 et
    Node 24.13.0 dans l’environnement de validation.
  - `astro.config.mjs` configure Tailwind via `@tailwindcss/vite`; aucune
    intégration client React ou routeur côté client n’est configurée.
  - Les pages partent de `src/pages/` et `src/pages/fr/`; les fiches sont générées
    statiquement depuis `src/data/projects.ts`.
  - `src/layouts/Layout.astro` produit le document et son shell. Les scripts de
    `Navigation.astro` et `ThemeToggle.astro` prennent leurs éléments via
    `document.querySelector`/`getElementById` et ajoutent des listeners sur les
    nœuds trouvés.
  - Aucun module de motion, SVG interactif, GSAP, ScrollTrigger, Three.js,
    canvas, WebGL, IntersectionObserver ou événement Astro de navigation n’est
    utilisé dans `src/`.
  - `global.css` contient déjà une règle `prefers-reduced-motion` qui réduit
    transitions/animations. Il n’existe pas encore de contrat JavaScript commun
    pour cette préférence.
  - Astro `ClientRouter` est livré dans le package installé, mais aucun layout ne
    l’importe. Le routeur natif et la navigation complète restent le
    comportement effectif.

  **État Git :** lors de la baseline P0, HEAD était `05ef729` et l’interface
  indiquait deux commits d’avance; au contrôle P1, HEAD et `origin/main` étaient
  tous deux `18592d0` (`Motion workflow`) et le worktree était propre. Cette
  évolution du suivi distant n’a pas été provoquée par P1. Aucun fichier
  applicatif n’a été édité dans cette mission.

  ## Architecture cible

  ### 1. Contenu statique et CSS/SVG

  Astro continue de rendre titres, liens, états, légendes, contrôles et
  alternatives textuelles dans le HTML initial. CSS gère le focus, les états
  simples, les transitions courtes et la variante reduced-motion. Les cartes et
  connecteurs restent des SVG accessibles accompagnés de contrôles ou
  d’explications HTML. La disponibilité du JavaScript ne doit jamais décider si
  le contenu essentiel existe.

  ### 2. Interactions natives et modules par page

  Privilégier les contrôles HTML natifs (`button`, lien, radio, `details`, et
  `dialog` si un vrai agrandissement est retenu) avant d’ajouter une bibliothèque.
  Quand une interaction exige du JavaScript, l’élément Astro déclare son
  ancrage; le module de la page ne recherche et n’initialise que ces ancrages.
  Il n’y a pas de gestionnaire d’animation global pour des pages qui n’en ont pas.

  Organisation proposée, à créer seulement au moment des tâches P2/P4
  correspondantes :

  ```text
  src/
    utils/
      motion.ts                 # préférence, petites fonctions de cycle de vie partagées
    components/
      animations/               # wrappers Astro déclaratifs, si réutilisation avérée
      visuals/                  # SVG/HTML accessibles et fallback
    scripts/
      motion/
        home.ts                 # uniquement si l’accueil reçoit une interaction
        project-evidence.ts     # uniquement si le dialogue/preuve est retenu
        spatial-scene.ts        # import dynamique, prototype approuvé seulement
  ```

  Ne pas créer ces fichiers ou dossiers pour eux-mêmes. Co-localiser un script
  très court à son composant s’il ne sert qu’une fois; extraire un utilitaire
  seulement lorsqu’au moins deux composants ont réellement le même besoin.

  ### 3. Contrat d’initialisation et de nettoyage

  Chaque amélioration client doit :

  1. Recevoir une racine DOM explicite et vérifier la présence de ses éléments.
  2. Être idempotente pour cette racine et ne pas installer deux fois les mêmes
    listeners, observers ou timelines.
  3. Renvoyer une fonction `cleanup()` qui annule les animations, déconnecte les
    observers, supprime les listeners et libère les ressources appartenant à
    cette racine.
  4. Éviter les recherches globales et les destructions globales (par exemple,
    ne pas tuer les timelines d’une autre page).
  5. Se désactiver avec une version statique utile lorsque l’API ou l’effet n’est
    pas disponible.

  Ne pas ajouter un registre global complexe tant que le nombre d’interactions ne
  le justifie pas. Si le routeur Astro est adopté plus tard, une seule frontière
  de cycle de vie de route appellera les `init()` applicables après
  `astro:page-load` et leurs `cleanup()` avant `astro:before-swap`; le bootstrap
  global reste installé une seule fois. La navigation native complète ne requiert
  pas ce mécanisme.

  ### 4. Astro ClientRouter et transitions

  `ClientRouter` est une capacité Astro existante, et non une dépendance séparée.
  P1 n’ajoute pas le composant et ne change pas les transitions. La navigation
  native reste le fallback et le comportement de référence.

  Avant une activation ultérieure en P3, il faudra, dans un prototype séparé :

  - vérifier les événements de cycle de vie et le comportement back/forward dans
    la version Astro réellement installée;
  - rebrancher menu et thème sur les nœuds de page remplacés sans doubler les
    listeners;
  - confirmer la restauration du focus, l’annonce de changement de page et
    l’absence de délai ou piège clavier;
  - respecter reduced motion et conserver une sortie par navigation standard.

  Ne pas marquer des éléments `transition:persist` ni modifier le shell pour
  anticiper P3. La présence du composant dans `node_modules` ne prouve pas que le
  site actuel supporte déjà ses remplacements DOM.

  ### 5. GSAP et ScrollTrigger

  Si une séquence narrative complexe est approuvée et qu’une approche CSS/WAAPI ne
  suffit pas, un unique module de page pourra importer dynamiquement GSAP et
  ScrollTrigger. ScrollTrigger est le plugin de cette intégration GSAP, pas un
  moteur additionnel à combiner avec d’autres bibliothèques. Il ne faut pas
  enregistrer une animation globale à l’échelle de toutes les pages.

  Pour un prototype autorisé :

  - importer seulement depuis le module de la page concernée;
  - vérifier `prefers-reduced-motion` avant l’import et avant l’initialisation;
  - sélectionner des nœuds sous la racine du composant;
  - regrouper les animations dans un `gsap.context()` limité à cette racine;
  - rendre la destruction par `context.revert()` et `ScrollTrigger` localement
    testable; ne pas employer de destruction globale;
  - éviter l’épinglage tant qu’il n’est pas requis pour comprendre une relation;
  - mesurer l’impact sur le JS transféré, le layout, le scroll, le clavier et le
    mobile avant de conserver le prototype.

  Aucun GSAP n’est justifié par le site actuel. Les transitions simples, les
  connecteurs SVG à dessin unique, l’entrée d’une preuve et les retours de
  contrôle restent des cas CSS/WAAPI/natifs.

  ### 6. SVG/CSS, événements et tactile

  - SVG privilégie des lignes et formes décoratives avec `aria-hidden="true"` et
    un état/texte accessible équivalent dans le DOM.
  - Événements `click`, activation clavier et focus sont les sources
    fonctionnelles; ne pas mettre une information derrière le seul `hover`.
  - Les effets de profondeur ne s’initialisent que sur un pointeur adapté
    (`hover`/`pointer:fine`) et si le mouvement n’est pas réduit; le tactile
    conserve un contrôle explicite natif.
  - Tout `pointermove`, `resize`, `visibilitychange` ou listener global est
    limité, nettoyé, et ne lit pas/écrit pas le layout à chaque frame.
  - `IntersectionObserver` ou `loading="lazy"` est préféré à un moteur pour
    différer l’initialisation/chargement d’un contenu sous la ligne de flottaison.

  ### 7. Three.js et ressources spatiales

  Three.js reste une expérience tardive et expérimentale. Le choix précédent est
  SVG/HTML d’abord; rien dans la baseline ne justifie une scène WebGL.

  Si une preuve statique échoue et que le propriétaire approuve un prototype :

  - placer une scène dans un module isolé, importé seulement à proximité de sa
    zone et jamais dans le chemin critique;
  - vérifier reduced motion et capacité avant le chargement; livrer un fallback
    SVG/HTML complet;
  - utiliser un seul renderer/scène borné à son composant, suspendre le rendu
    lorsque le document ou la zone est masqué;
  - arrêter la boucle `requestAnimationFrame`, déconnecter `ResizeObserver`,
    IntersectionObserver et listeners, libérer géométries, matériaux, textures et
    renderer, puis retirer le canvas lors de `cleanup()`;
  - mesurer bundle, création de contexte GPU, stabilité d’image, mémoire après
    navigation et coût sur un appareil mobile représentatif; abandonner si la
    valeur ne justifie pas le coût.

  Ne pas ajouter React Three Fiber : aucune scène évaluée n’a besoin d’une couche
  d’état React.

  ### 8. Réduction du mouvement et chargement

  La préférence `prefers-reduced-motion` est consultée avant tout chargement
  facultatif et avant de lancer une timeline/scène. En mode `reduce`, afficher
  directement l’état final et les contrôles; si la préférence change pendant une
  session, interrompre l’effet et rétablir l’état lisible sans retirer de contenu.
  La règle CSS existante demeure le filet de sécurité, pas l’unique contrat d’une
  future scène JavaScript.

  Images avec dimensions et captions localisées; chargement différé quand elles
  sont hors écran. Modules d’animation importés uniquement par les routes qui en
  ont besoin. Aucun preloader, aucun faux pourcentage et aucun mouvement continu
  pour exprimer un état statique.

  ## Dépendances et décision

  | Dépendance / API                                       | Présence vérifiée                                      | Rôle et justification éventuelle                                     | Impact et alternatives                                                                                       | Décision P1                             |
  | ------------------------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
  | Astro 7.4.12                                           | Installé; `ClientRouter` livré dans le package         | Génération statique; routeur Astro intégré si transitions approuvées | Pas de package supplémentaire; routeur natif reste fallback                                                  | Conserver; ne pas activer en P1         |
  | CSS, SVG, Web Animations API                           | APIs plateforme; CSS déjà utilisé                      | Effets locaux, focus, dessin de ligne et états simples               | Pas de dépendance; meilleur coût de bundle                                                                   | Choix par défaut                        |
  | `IntersectionObserver`, `matchMedia`, `ResizeObserver` | APIs plateforme, code d’application sans usage observé | Lazy init, préférence mouvement, dimensionnement borné               | Pas de dépendance; tester fallback/capacité                                                                  | Utiliser ponctuellement si besoin       |
  | GSAP                                                   | Absent                                                 | Timeline complexe seulement si preuve CSS/WAAPI insuffisante         | Ajoute du JavaScript client; coût exact à mesurer lors d’un prototype. Alternative : CSS/WAAPI               | Facultatif; ne pas installer maintenant |
  | ScrollTrigger                                          | Absent                                                 | Pinned/scroll narrative concrète                                     | S’intègre à GSAP; épinglage et layout augmentent le coût de test. Alternative : observer/CSS scroll timeline | Facultatif avec GSAP, jamais séparément |
  | Three.js                                               | Absent                                                 | Une relation spatiale que SVG/HTML ne communique pas                 | Charge JS et ressources GPU/canvas; coût exact à mesurer. Alternative : SVG/CSS/HTML                         | Expérimental, tardif, non retenu        |
  | React / React Three Fiber                              | Absent                                                 | Aucun besoin de rendu à état identifié                               | Ajoute runtime et hydratation                                                                                | Écarté sans nouvelle justification      |
  | Lenis                                                  | Absent                                                 | Défilement fluide personnalisé                                       | Ajoute runtime et modifie un comportement d’accessibilité/navigateur                                         | Écarté                                  |
  | Runner E2E                                             | Absent                                                 | Test navigateur automatisé éventuel                                  | Introduit outil et dépendances; tests manuels/CLI disponibles                                                | Ne pas ajouter en P1                    |

  Aucune installation n’a été faite. Les poids bundle spécifiques GSAP/Three.js
  ne sont donc pas mesurés; ne pas annoncer un chiffre estimé comme résultat du
  projet. Un prototype ultérieur doit comparer le delta compressé sur le build
  réel, sur route isolée, avant décision d’ajout permanent.

  ## Prototypes P1

  | Candidat                           |          Réalisé en P1 ? | Motif et prérequis                                                                                                                                                                               |
  | ---------------------------------- | -----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | GSAP dans une page Astro           |                      Non | Aucun timeline complexe approuvé; une dépendance d’essai serait prématurée. Exiger une séquence concrète et une décision P2/P3 avant spike isolé.                                                |
  | Nettoyage après changement de page |                      Non | Le routeur n’est pas activé et P3 est explicitement hors périmètre. Le contrat d’API `init()/cleanup()` et la dette des scripts actuels sont documentés; test pratique exigé avant ClientRouter. |
  | ScrollTrigger                      |                      Non | Pas de scène épinglée retenue; comportement et compatibilité mobile doivent être prototypés seulement pour un cas validé.                                                                        |
  | Three.js chargement/destruction    |                      Non | Pas de preuve statique démontrée insuffisante; aucune raison d’installer ou exécuter WebGL en P1.                                                                                                |
  | Reduced motion                     | Pas de nouveau prototype | Le CSS existant a été vérifié en source; pas de nouvelle animation à démarrer. Les futurs effets JS doivent tester cette branche avant leur chargement.                                          |

  Ce choix évite d’introduire des dépendances ou un faux produit de démonstration.
  Il ne prétend pas avoir testé les lifecycle hooks, timelines ou ressources qui
  n’existent pas dans l’application.

  ## Vérifications et résultats

  Exécutés dans P1 sur l’application inchangée :

  | Commande / inspection                                                       | Résultat                                                                                                   |
  | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
  | `npm ls --depth=0`                                                          | Dépendances installées conformes au manifeste : Astro, Tailwind, TypeScript, outils de contrôle/formatage. |
  | Vérification des paquets `gsap`, `three`, `@astrojs/sitemap`, Playwright    | Aucun des paquets optionnels n’est installé au niveau racine.                                              |
  | Inspection d’`astro/components/ClientRouter.astro` et des types transitions | Le composant natif et son API sont présents dans Astro 7.4.12; ils ne sont pas utilisés par l’application. |
  | Recherche dans `src/` de GSAP/Three/routeur/observers                       | Aucun mécanisme trouvé; la préférence reduced-motion est définie dans le CSS global.                       |
  | `npm run check`                                                             | Réussi : 0 erreur, 0 warning, 30 indications de modernisation JSDoc préexistantes.                         |
  | `npm run build`                                                             | Réussi : 22 routes statiques produites en environ 11,36 s dans cet environnement.                          |

  Le build confirme le rendu statique de la configuration courante, pas la
  compatibilité d’une future animation ou transition. Aucun test de navigateur,
  cleanup runtime, back/forward avec ClientRouter, bundle GSAP, ScrollTrigger ou
  disposal Three.js n’a été exécuté. Aucun test ne valide l’absence de fuite d’un
  mécanisme inexistant.

  ## Risques et limites

  1. **Cycle de vie ClientRouter :** les scripts menu/thème actuels sont
    attachés aux nœuds initiaux. Activer le routeur sans refonte/test ferait
    courir un risque de contrôles inactifs ou d’initialisations dupliquées.
  2. **Prototypes non faits :** justifié par l’absence de scène/interaction
    complexe approuvée; les intégrations conditionnelles ne sont pas certifiées.
  3. **Bundle optionnel non mesuré :** GSAP et Three ne sont pas installés; seuls
    des deltas mesurés dans un prototype représentatif peuvent permettre
    l’approbation.
  4. **Pas de suite navigateur :** le dépôt n’a pas de runner de test/E2E
    déclaré; les tests lifecycle devront être manuels ou justifier un outillage
    nouveau avant adoption.
  5. **Architecture de modules :** les chemins proposés restent des conventions
    à appliquer à la demande; ne pas créer un registre ou une bibliothèque
    interne tant qu’un deuxième consommateur n’existe pas.
  6. **Performance terrain :** temps de build et tailles locales ne mesurent ni
    réseau, ni appareil mobile, ni GPU. Aucun budget n’est approuvé.

  ## Décisions restantes et prérequis P2

  - Le contrat technique est défini sans migration ni package nouveau.
  - Les choix créatifs toujours ouverts (asymétrie, Hero/EP, cadre des preuves,
    premier SVG et valeur d’une expérience spatiale) restent à arbitrer avant
    l’entrée en P2; ils ne sont pas tranchés dans le présent rapport.
  - Toute première animation doit conserver un état statique, une version
    reduced-motion et un comportement tactile/clavier équivalent.
  - Un prototype GSAP/ScrollTrigger, ClientRouter ou Three.js exige un cas
    d’utilisation ciblé et un plan de test isolé avant toute installation.
  - P2 ne commence pas sans validation explicite de la fin de P1.
