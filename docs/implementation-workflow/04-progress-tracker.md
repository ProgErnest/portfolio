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

## État des phases

| Phase                                   | État initial             | Condition de démarrage/sortie                                 |
| --------------------------------------- | ------------------------ | ------------------------------------------------------------- |
| P0 — Initialisation                     | En attente de validation | Approbation explicite du présent résultat.                    |
| P1 — Architecture technique             | Bloqué par P0            | Arbitrages et risques humains examinés.                       |
| P2 — Design system et Motion System     | En attente               | P1 validée; spécimen approuvé avant extension.                |
| P3 — Expérience globale et navigation   | En attente               | P2 validée; routes/fallbacks préservés.                       |
| P4 — Implémentation des pages           | En attente               | P3 validée; chaque preuve dispose d’une autorisation.         |
| P5 — Expériences immersives avancées    | Conditionnel             | Bénéfice démontré; approbation dédiée si technologie lourde.  |
| P6 — Stabilisation et assurance qualité | En attente               | Incréments choisis implémentés.                               |
| P7 — Livraison                          | En attente               | P6 validée et approbation explicite distincte de publication. |

## Journal d’incréments

| Date       | Mission | Résumé                                                                                                                                                      | Vérification                                                              | Validation                                                               |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 2026-11-23 | P0      | Baseline et système de pilotage préparés; aucun code applicatif touché.                                                                                     | `format:check`, `lint`, `check`, `build` exécutés; détails dans baseline. | En attente de validation utilisateur.                                    |
| 2026-11-23 | P0      | Autorisation utilisateur enregistrée pour toutes les captures fournies, y compris libellés visibles; `.env.prod` reste à supprimer de l’historique externe. | Documentation mise à jour; aucun fichier applicatif ou distant modifié.   | Autorisation des captures confirmée; P0 global en attente de validation. |

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
