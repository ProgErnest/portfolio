# Stratégie de test

Cette stratégie part des outils déjà configurés; elle n’impose aucune nouvelle
dépendance. Ajouter un runner ou un outil uniquement si un besoin précis le
justifie et après validation du périmètre.

## État actuel des outils

- Format : `npm run format:check` (Prettier, sources ciblées).
- Analyse statique : `npm run lint` (ESLint et plugin Astro).
- Types/Astro : `npm run check` (`astro check`, TypeScript strict).
- Build : `npm run build` (export statique Astro).
- Aucun runner unitaire, component, E2E ou test navigateur n’est déclaré dans
  `package.json` au moment de P0.
- Les contrôles P0 observés sont rapportés dans
  [`02-technical-baseline.md`](./02-technical-baseline.md).

## À chaque changement applicatif

1. Relire le diff et `git status` pour préserver les modifications préexistantes.
2. `npm run format:check`.
3. `npm run lint`.
4. `npm run check`.
5. `npm run build`.
6. Exécuter les tests ciblés existants; ajouter quelques cas seulement pour un
   nouveau comportement ou défaut corrigé.
7. Revoir visuellement au navigateur quand la présentation change.
8. Inspecter le HTML généré et les sorties pour liens, routes, contenus et
   preuves non autorisés.

Un échec de commande doit être corrigé ou expliqué; ne pas le reformuler comme
un contrôle réussi.

## Tests de routage et de contenu

- Vérifier les 22 routes actuelles et toutes les routes EN/FR équivalentes après
  changement de routage.
- Vérifier `getLocalizedPath()` pour correspondances et cas indisponibles.
- Vérifier chaque fiche projet et ses données partagées (statut, texte, capture,
  technologie, liens).
- Vérifier l’index : radios Tous/En cours/Terminé/Fonctionnel, ordre et accès
  clavier; tester la stratégie CSS dans un navigateur compatible ainsi que le
  fallback non amélioré.
- Contrôler dans le HTML compilé : pas de lien Auction Bids avant levée du gate;
  aucune capture HSVP non autorisée; pas d’affirmation d’acceptation JED;
  séparation V1/futur de Library Management.
- Comparer les traductions sur l’ensemble de la séquence et des affordances, pas
  uniquement la présence d’une page FR.

## Vérification navigateur manuelle

Pour les changements UI, examiner au minimum :

- Viewports étroits (390 px), tablette (768 px) et bureau représentatif.
- Parcours clavier seul, focus visible, skip link, menu et fermeture Escape.
- Modes clair et sombre; langue EN et FR.
- `prefers-reduced-motion: reduce` et navigation sans JavaScript pour le contenu
  essentiel.
- Images chargées, dimensions/captions, liens, absence de débordement horizontal
  et console sans erreur.
- Back/forward et répétition de navigation si des transitions/routes améliorées
  ont été introduites.

Les largeurs sont des cas de test proposés, pas des mesures de conformité
actuelles. Documenter navigateur, viewport et résultat.

## Accessibilité et confidentialité

- Vérifier sémantique, ordre des titres, landmarks, labels, alternatives, focus,
  états actifs et contrastes.
- Vérifier que les interactions ne dépendent pas de la souris, de couleur seule,
  de mouvement continu ou d’une information cachée.
- Vérifier toutes les copies localisées et les légendes fictives des captures
  JED/Auction/Library autorisées.
- Ne pas ouvrir ou intégrer de ressource HSVP sensible sans autorisation; les
  tests d’artefacts peuvent valider présence/absence sans imprimer leur contenu.
- Rechercher les secrets par outils adaptés avant publication; ne jamais placer
  une valeur trouvée dans logs, tests ou documents.

## Performance

La baseline est qualitative et n’est pas une mesure terrain. Pour une
optimisation ou un prototype spatial, enregistrer :

- navigateur, appareil, viewport, état de cache et réseau;
- poids des assets effectivement transférés, JavaScript/CSS et requêtes tierces;
- rendu/LCP, CLS ou métriques réellement disponibles, sans les inventer;
- comportement des images sous et hors écran;
- stabilité et ressources lors d’une interaction; cleanup après navigation si
  applicable.

Comparer avant/après sur le même dispositif. Aucun seuil n’est fixé tant qu’un
budget n’a pas été choisi à partir d’une mesure et validé.

## Release checks

- Build statique et smoke tests des routes EN/FR.
- Vérification manuelle des liens internes et externes, assets et destination
  non trouvée.
- Meta title/description, canonical, hreflang, sitemap et robots selon les
  fonctionnalités réellement configurées.
- Revue de confidentialité sur source, captures, `dist/` et liens externes.
- Vérification de l’aperçu seulement; aucune production sans autorisation.
