# Plan d’implémentation

## Règles d’exécution

- Les étapes décrivent un ordre et des portes de sortie, pas une autorisation
  globale de modifier le site.
- Aucun travail de code ne commence avant validation explicite de P0 et des
  décisions créatives requises en P1.
- Chaque incrément suit : analyse ciblée, plan si changement important,
  implémentation limitée, contrôles, revue des régressions, mise à jour des docs.
- Les conditions de passage sont détaillées dans
  [`05-quality-gates.md`](./05-quality-gates.md); le statut courant est dans
  [`04-progress-tracker.md`](./04-progress-tracker.md).

## P0 — Initialisation

**But :** établir le cadre de travail, la baseline et les blocages à partir du
dépôt réel.

**Livrables :** charte, plan, baseline, backlog, suivi, quality gates, stratégie
de tests et journal de décisions; dossier `reports/`.

**Sortie :** documents contrôlés, audit factuel et validation explicite de
l’utilisateur. Aucun code applicatif modifié.

**État :** documents préparés; en attente de validation de l’utilisateur.

## P1 — Architecture technique

**But :** confirmer la traduction de la conception en incréments compatibles
avec l’architecture déjà présente.

**Travaux :** confirmer les choix créatifs laissés ouverts; établir les contrats
de routes bilingues, de contenu statique, de cycle de vie des améliorations et
de preuves; résoudre les blocages d’accès/confidentialité pertinents.

**Sortie :** périmètre P2 approuvé, dépendances confirmées et aucune migration
implicite. L’architecture réelle est déjà Astro 7 statique avec TypeScript; une
migration n’est pas présumée nécessaire.

**Résultat P1 :** architecture native-first documentée dans
[`reports/p1-technical-architecture.md`](./reports/p1-technical-architecture.md);
aucune dépendance ou fonctionnalité applicative ajoutée. Validation P1 en
attente. Les décisions créatives ouvertes restent des prérequis d’entrée P2.

## P2 — Design system et Motion System

**But :** traduire la composition approuvée en un spécimen statique réutilisant
les tokens existants, puis vérifier les primitives de mouvement minimales.

**Ordre :** spécimen champ/rail/preuve/EP et responsive; ensuite tokens et
améliorations de mouvement CSS/natives avec nettoyage et reduced motion.

**Sortie :** thèmes, textes EN/FR, focus, mobile et état sans JavaScript
acceptables; aucun contenu dépendant d’une animation.

## P3 — Expérience globale et navigation

**But :** préserver la navigation, le thème, le sélecteur de langue, le lien
d’évitement et les routes existantes, puis appliquer le système approuvé au
shell et à l’accueil.

**Sortie :** routes correspondantes, navigation clavier et menu mobile valides;
accueil complet sans script, responsive et fidèle aux faits vérifiés.

## P4 — Implémentation des pages

**But :** appliquer la direction validée à l’index de projets, aux preuves et
aux études de cas sans changer le statut factuel.

**Ordre recommandé :** index et filtres; contrat de preuve; JED; Library
Management; Auction Bids; HSVP Hub. La publication d’un lien Auction Bids
demeure bloquée par `.env.prod`. L’utilisateur a autorisé l’utilisation de
toutes les captures HSVP fournies telles quelles, avec données fictives et
libellés visibles; aucune donnée réelle ou autre information confidentielle ne
doit être ajoutée.

**Sortie :** chaque interaction a un équivalent textuel, chaque capture une
légende localisée autorisée, et les statuts sont exacts.

## P5 — Expériences immersives avancées

**But :** éprouver, uniquement si les pages statiques le justifient, une
expérience spatiale circonscrite.

**Ordre :** commencer par HTML/SVG accessible et fallback statique. WebGL/Three.js
n’est évalué que si le prototype n’exprime pas la relation voulue et que
l’utilisateur autorise explicitement l’essai. Ce n’est ni une obligation de
couverture ni une justification automatique d’ajouter une dépendance.

**Sortie :** bénéfice documenté, comportement mobile et mouvement réduit,
chargement non critique, cycle de vie nettoyé, performance mesurée. Abandonner
si le bénéfice ne justifie pas le coût.

## P6 — Stabilisation et assurance qualité

**But :** terminer les pages About, Skills, Experience et Contact selon les
spécifications retenues; vérifier l’ensemble du site, les métadonnées et les
risques.

**Sortie :** checks automatisés passants, parcours EN/FR, viewport, thème,
clavier, reduced motion, liens, console, confidentialité et performance
examinés; anomalies et limites tracées.

## P7 — Livraison

**But :** préparer une livraison reproductible et réversible.

**Travaux conditionnels :** confirmer domaine et hébergement, valider la sortie
statique et la configuration de prévisualisation, puis préparer les tests de
smoke et le rollback.

**Sortie :** readiness vérifiée et approbation humaine explicite. P7 ne permet
pas de déployer, modifier le DNS, committer ou pousser sans autorisation
distincte.

## Correspondance avec la roadmap créative

Les phases créatives 0–8 sont regroupées dans les phases P0–P7 ci-dessus :
validation créative en P1; langage visuel et motion en P2; shell/accueil en P3;
index, preuves et études de cas en P4; prototype spatial facultatif en P5;
pages restantes et assurance qualité en P6; readiness et livraison en P7.
Cette correspondance ne modifie pas les documents créatifs validés.
