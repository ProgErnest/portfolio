# Suivi de progression

## Statuts

- **En attente :** pas commencé; les prérequis sont satisfaits ou non encore
  évalués.
- **En cours :** incrément autorisé et activement travaillé.
- **Bloqué :** une décision, donnée ou condition préalable empêche le travail;
  le blocage et son responsable sont explicités.
- **En attente de validation :** livrable prêt, aucune phase dépendante ne
  démarre avant l’approbation requise.
- **Terminé :** critères d’acceptation vérifiés et livrable accepté.
- **Conditionnel :** ne démarre que si le besoin est démontré et approuvé.

Ne pas confondre « contrôle automatisé réussi » et « mission validée ».
Actualiser ce fichier et le backlog à la fin de chaque mission autorisée; garder
une date et des preuves observables.

## État P0 — 23 novembre 2026

| Élément                                                 | État                     | Preuve / blocage                                                                                                                  |
| ------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Audit de la structure, stack, routes et fonctionnalités | Terminé                  | Baseline dans `02-technical-baseline.md`.                                                                                         |
| Lecture des dix références créatives                    | Terminé                  | `docs/creative-experience-upgrade/01` à `10`.                                                                                     |
| Contrôles natifs disponibles                            | Terminé                  | Format, lint, check et build rapportés en baseline.                                                                               |
| Dossier de workflow et documents                        | En attente de validation | Documents P0 rédigés; demander validation utilisateur.                                                                            |
| Captures HSVP fournies                                  | Terminé                  | L’utilisateur confirme leur création, leurs données fictives et leur utilisation telles quelles, y compris les libellés visibles. |
| `.env.prod` du dépôt externe Auction Bids               | Bloqué                   | Le propriétaire prévoit son retrait de l’historique; pas encore confirmé.                                                         |
| Modifications applicatives                              | Non commencées           | Interdites dans cette mission exclusivement préparatoire.                                                                         |
| Commit, push, déploiement                               | Non effectués            | Aucune autorisation donnée.                                                                                                       |

## État P1 — 23 novembre 2026

| Élément                                                  | État                     | Preuve / blocage                                                                  |
| -------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------- |
| Vérification de la stack et des dépendances optionnelles | Terminé                  | `npm ls --depth=0`; GSAP, Three.js et Playwright absents.                         |
| Architecture Astro/native-first et cycle de vie          | Terminé                  | [`reports/p1-technical-architecture.md`](./reports/p1-technical-architecture.md). |
| Prototype GSAP/ScrollTrigger/ClientRouter/Three.js       | Différé                  | Aucun cas concret approuvé; routeur global hors P1/P3.                            |
| Validation statique et TypeScript                        | Terminé                  | `npm run check` et `npm run build` réussis; détails dans le rapport.              |
| Approbation du résultat P1                               | En attente de validation | P2 ne commence pas avant accord explicite.                                        |
| Arbitrages créatifs ouverts pour P2                      | En attente               | Hero/asymétrie/preuves/premier prototype restent à confirmer.                     |

## État des phases

| Phase                                   | État initial             | Condition de démarrage/sortie                                       |
| --------------------------------------- | ------------------------ | ------------------------------------------------------------------- |
| P0 — Initialisation                     | Terminé                  | La mission P1 a été lancée par l’utilisateur.                       |
| P1 — Architecture technique             | En attente de validation | Architecture P1 rédigée et contrôles statiques réussis.             |
| P2 — Design system et Motion System     | Terminé                  | G2 vérifié; spécimen des 16 motifs et primitives motion bilingues livrés. |
| P3 — Expérience globale et navigation   | En attente               | P2 validée; sélection créative H01/H02/H03 enregistrée.             |
| P4 — Implémentation des pages           | En attente               | Sélections A/P/C/S/E/X consignées dans `08-creative-selections.md`. |
| P5 — Expériences immersives avancées    | Conditionnel             | Bénéfice démontré; approbation dédiée si technologie lourde.        |
| P6 — Stabilisation et assurance qualité | En attente               | Incréments choisis implémentés.                                     |
| P7 — Livraison                          | En attente               | P6 validée et approbation explicite distincte de publication.       |

## Journal d’incréments

| Date       | Mission | Résumé                                                                                                                                                      | Vérification                                                                 | Validation                                                               |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 2026-11-23 | P0      | Baseline et système de pilotage préparés; aucun code applicatif touché.                                                                                     | `format:check`, `lint`, `check`, `build` exécutés; détails dans baseline.    | En attente de validation utilisateur.                                    |
| 2026-11-23 | P0      | Autorisation utilisateur enregistrée pour toutes les captures fournies, y compris libellés visibles; `.env.prod` reste à supprimer de l’historique externe. | Documentation mise à jour; aucun fichier applicatif ou distant modifié.      | Autorisation des captures confirmée; P0 global en attente de validation. |
| 2026-11-23 | P1      | Architecture native-first définie; aucune dépendance ni code applicatif ajouté.                                                                             | `npm run check`, `npm run build`; rapport détaillé P1.                       | En attente de validation utilisateur; P2 non commencé.                   |
| 2026-11-23 | P2      | Tokens motion, primitives CSS et spécimen bilingue ajoutés sans moteur ni JS obligatoire.                                                                   | lint, check et build réussis; smoke test EN/FR et rendu navigateur vérifiés. | En attente de validation utilisateur.                                    |
| 2026-11-23 | P2      | Sélection utilisateur enregistrée pour 16 composants immersifs, avec contraintes responsive, reduced-motion et confidentialité.                             | `08-creative-selections.md`; aucun fichier applicatif modifié.               | Sélection créative enregistrée; implémentation non autorisée.            |
| 2026-11-23 | P2      | Arbitrage consigné pour transitions hybrides, échange de route masqué, navigation mixte et canvas épars suspendu.                                           | `09-motion-navigation-arbitrage.md`; aucun fichier applicatif modifié.       | Direction approuvée; prototype P3/P5 non commencé.                       |
| 2026-11-23 | P2      | Spécimen interactif bilingue des 16 motifs intégré au système de design; primitives CSS natives conservées, sans transition globale ni canvas.             | `format:check`, `lint`, `check` (0 erreur, 0 avertissement, 32 hints) et build (22 routes); navigateur EN/FR, 3 largeurs, thèmes, clavier et reduced-motion vérifiés; contraste texte minimal 4,67:1 et focus 5,13:1. | Terminé à la demande explicite de l’utilisateur; intégration aux pages et transitions P3/P4/P5 restent hors périmètre. |

## Règles de mise à jour

1. Ajouter une ligne de journal pour chaque incrément livré, y compris les
   limites de vérification.
2. Déplacer une tâche vers « En cours » seulement après vérification de ses
   dépendances et autorisations.
3. Toute tâche bloquée nomme la donnée/décision manquante sans enregistrer de
   secret ni de donnée personnelle non nécessaire.
4. Ne jamais fermer un blocage externe à partir d’une hypothèse ou d’un lien qui
   répond simplement.
5. Indiquer distinctement les tests non exécutés et les contrôles passants.
