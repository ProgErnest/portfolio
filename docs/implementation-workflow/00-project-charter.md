# Charte du projet — workflow d’implémentation

## Mission

Établir un pilotage fiable, contrôlé et vérifiable pour faire évoluer le
portfolio Astro existant à partir des dix références validées dans
`docs/creative-experience-upgrade/`. Cette charte n’autorise ni une nouvelle
conception créative ni des changements applicatifs.

## Objectifs

- Préserver et faire évoluer le site réel, pas une architecture théorique.
- Livrer une expérience professionnelle bilingue, accessible, responsive,
  rapide et cohérente avec les références créatives validées.
- Maintenir une distinction vérifiable entre fonctionnalités existantes,
  travaux en cours et pistes futures.
- Transformer les objectifs créatifs en changements incrémentaux avec
  dépendances, critères d’acceptation et tests.
- Garder visibles les validations humaines, limites de preuve et risques de
  confidentialité.

## Périmètre

### P0 — mission actuelle

- Auditer le dépôt et les dix documents créatifs.
- Documenter l’état Git, la baseline technique, les écarts et les risques.
- Créer et tenir à jour les documents de ce dossier.
- Ne modifier aucun code applicatif, contenu public, référence créative,
  dépendance ni configuration de livraison.
- Ne pas committer, pousser ou déployer.

### P1–P7 — travaux futurs, non autorisés par cette charte seule

L’implémentation suit les phases du plan
[`01-implementation-plan.md`](./01-implementation-plan.md). Chaque mission
future devra avoir son périmètre, ses critères et ses validations. La présente
charte ne constitue pas l’approbation des décisions créatives encore ouvertes.

## Contraintes non négociables

1. Préserver les fonctionnalités, les routes EN/FR et leur équivalence.
2. Garder l’anglais comme langue par défaut et le français complet.
3. Préserver les usages clavier, lecteurs d’écran, préférences de mouvement
   réduit, thèmes et formats responsive.
4. Ne jamais publier de donnée réelle, dossier patient, identifiant, secret ou
   information confidentielle HSVP-Hub. L’utilisateur confirme que toutes les
   captures fournies sont de sa création, utilisent des données fictives et
   autorise leur utilisation telles quelles, y compris les libellés visibles.
5. Ne pas revendiquer d’acceptation client ni de résultats JED non confirmés.
6. Présenter Auction Bids comme partiel et en reconstruction; ne pas ajouter de
   lien vers son dépôt avant résolution documentée du problème `.env.prod`.
7. Séparer explicitement la V1 fonctionnelle de Library Management de ses
   améliorations futures.
8. Ne pas altérer les faits professionnels vérifiés ni inventer d’informations.
9. Ne pas introduire React, GSAP, Three.js, un backend, une base de données ou
   un service payant sans besoin démontré et validation appropriée.
10. Ne pas publier, déployer, committer ou pousser sans autorisation explicite.

## Principes d’architecture

- Astro statique-first et HTML sémantique comme fondation.
- Progressivité : la page conserve son contenu et sa navigation sans JavaScript.
- CSS et API natives avant toute bibliothèque; SVG/HTML avant WebGL.
- Traductions, statuts et preuves explicites; ne pas masquer les incertitudes.
- Mesurer les coûts réels avant d’affirmer une amélioration de performance.
- Réutiliser les composants et données existants lorsqu’ils conviennent; éviter
  les abstractions prématurées.
- Une animation doit expliquer une hiérarchie, un état, une relation ou une
  transition et disposer d’un équivalent statique.

## Réussite et clôture

P0 est prêt pour validation lorsque les neuf éléments listés dans la demande sont
présents, que les faits documentés correspondent au dépôt, que les changements
applicatifs sont absents, que les contrôles exécutables sont rapportés et que
les blocages humains sont visibles. P0 ne passe à « terminé » qu’après
validation explicite de l’utilisateur.

Une future mission est terminée lorsque ses critères d’acceptation sont vérifiés,
les contrôles pertinents passent ou leurs échecs sont expliqués, aucun incident
créé par le changement ne reste ouvert, et le suivi est actualisé.

## Points humains connus à la date de P0

- Les choix créatifs explicitement laissés à validation sont consignés dans
  [`07-implementation-decisions.md`](./07-implementation-decisions.md).
- L’utilisateur a confirmé le 23 novembre 2026 que les captures fournies sont
  les siennes, n’utilisent aucune donnée réelle et peuvent toutes être utilisées
  telles quelles, y compris les libellés visibles. Cette autorisation porte sur
  ces captures seulement; elle n’autorise pas des données réelles, secrets ou
  autres informations confidentielles. Leur visibilité externe dans Git reste
  inconnue.
- Le dépôt public externe Auction Bids contient, selon la documentation du
  projet, un `.env.prod` dont l’assainissement n’est pas confirmé. Ne pas
  consulter ou recopier son contenu; aucun lien vers ce dépôt avant résolution.
- Le domaine et la cible d’hébergement restent à confirmer avant P7.
