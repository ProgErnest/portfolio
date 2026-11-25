# P4-1 — Accueil H01/H02/H03

**Date :** 24 novembre 2026  
**Statut :** Implémentation vérifiée; validation humaine explicite requise

## Périmètre

Cet incrément vérifie et affine l’intégration de production des trois motifs
approuvés pour l’accueil :

- `H01` — Orbital identity field.
- `H02` — Kinetic manifesto.
- `H03` — Scroll signal.

Le périmètre reste limité à
`src/components/home/Home.astro` et aux routes EN/FR associées. Aucun moteur,
canvas, routeur, nouvelle dépendance ou contenu professionnel n’a été ajouté.

## Fichiers modifiés

- `src/components/home/Home.astro`
- `docs/implementation-workflow/03-task-backlog.md`
- `docs/implementation-workflow/04-progress-tracker.md`
- `docs/implementation-workflow/07-implementation-decisions.md`

## Conformité

### H01 — Orbital identity field

- Le champ EP est statique sur mobile.
- Les trois trajectoires sont des liens HTML accessibles vers les sections
  vérifiées À propos, Projets et Expérience.
- Le champ conserve son monogramme, ses anneaux et ses lignes sans JavaScript.
- Les trois trajectoires restent dans les limites du champ circulaire sur
  desktop; leur position mobile est également vérifiée.

### H02 — Kinetic manifesto

- Le titre conserve son entrée native CSS existante.
- L’introduction et les actions restent hors animation essentielle.
- `prefers-reduced-motion: reduce` désactive l’animation et conserve le titre,
  son contenu et ses actions immédiatement visibles.

### H03 — Scroll signal

- Le signal pointe vers `#projects`, la véritable section des projets
  sélectionnés.
- Il ne simule aucune progression, chargement ou pourcentage.
- Son contenu reste visible et accessible sans JavaScript.

## Vérifications réalisées

Contrôles commandés :

- `npm run format:check` — réussi.
- `npm run lint` — réussi.
- `npm run check` — 0 erreur, 0 avertissement et 32 hints JSDoc existants.
- `npm run build` — 22 routes statiques construites.

Contrôles navigateur intégrés :

- Routes EN/FR chargées.
- Largeurs mobiles 390 px et bureau 1280 px vérifiées.
- Aucun débordement horizontal documenté.
- `H01` confirme trois destinations accessibles dans le DOM.
- `H03` expose `href="#projects"` dans les deux langues.
- Reduced motion désactive le nom d’animation du titre et conserve
  `transform: none`, `opacity: 1`.
- Le premier Tab atteint le lien d’évitement avec son texte localisé.

## Résultats connus

- Les ajustements desktop et mobile maintiennent tous les liens orbitaux dans
  les bornes du champ, sans modifier leur contenu ni leur ordre DOM.
- Aucun script H01 supplémentaire n’est conservé : H01 reste statique, aussi
  bien en HTML qu’avec JavaScript.
- L’implémentation conserve les contrôles natifs des liens, de la navigation
  clavier et du défilement.
- Aucun passeur de lecteur d’écran dédié n’était disponible.

## Limitations

- Mesures de performance terrain non disponibles : aucun score LCP/CLS
  inventé.
- Browser automation persistante non configurée dans le dépôt.
- Les tests reposent sur le navigateur intégré Chromium fourni.

## Décision

L’incrément P4-Accueil est prêt pour validation humaine. Il ne ferme pas P4
dans son ensemble. Aucun incrément dépendant ne démarre avant accord explicite
sur ce rapport.
