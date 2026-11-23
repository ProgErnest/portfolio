# Quality gates

Les gates protègent la validation et la livraison; ils ne remplacent pas une
autorisation explicite. Un résultat manquant ne vaut pas réussite.

## Gates de phase

### G0 — Acceptation P0

- Les neuf documents/dossiers demandés existent et sont lisibles.
- La baseline correspond aux sources et résultats de commandes.
- Le périmètre préparatoire est respecté; aucun code applicatif modifié.
- Les changements Git antérieurs à P0 restent intacts.
- Les risques HSVP et Auction Bids sont exposés comme blocages, pas contournés.
- Validation explicite de l’utilisateur obtenue avant P1.

### G1 — Entrée/sortie P1

- Les décisions créatives encore ouvertes sont explicitement arbitré/es par le
  propriétaire.
- Les cas d’usage, routes EN/FR, fallbacks et données utilisés sont identifiés.
- Aucun changement architectural majeur n’est implicite.
- Les blocages de contenu/confidentialité sont assignés ou exclus du périmètre.
- P2 possède un plan et des critères de spécimen compréhensibles.

### G2 — P2 Design/Motion

- Composition acceptée avant généralisation.
- Les tokens actuels sont réutilisés sauf justification validée.
- Le contenu reste visible sans JavaScript et avec reduced motion.
- Focus, contrastes, modes clair/sombre, EN/FR et formats mobiles sont vérifiés.
- Aucun moteur ou package n’est ajouté sans besoin mesuré et validation
  pertinente.

### G3 — P3 Shell/Home

- Routes et destinations préexistantes fonctionnent dans les deux langues.
- Menu mobile, Escape, switch de langue, thème, lien d’évitement et états de
  focus passent les contrôles clavier.
- Le premier contenu utile n’attend aucun chargement ou animation.
- Aucun déplacement de layout évitable autour du Hero.

### G4 — P4 Pages/preuves

- Statuts conformes à `CONTENT_GUIDELINES.md` et aux données vérifiées.
- Toute copie a une version française complète.
- Toute capture publiée est explicitement autorisée, localisée, légendée et
  expurgée des données réelles.
- Aucun lien Auction Bids vers le dépôt avant confirmation de résolution de
  `.env.prod`.
- Les captures HSVP fournies sont celles explicitement approuvées par
  l’utilisateur, données fictives et libellés visibles compris; aucune donnée
  réelle ou secrète supplémentaire n’est publiée. Pas de revendication de
  déploiement en production.
- Library Management sépare V1 disponible et améliorations futures.
- JED n’implique ni acceptation client ni résultat non vérifié.

### G5 — P5 Immersion, si retenue

- La version statique communique l’essentiel et la relation ajoutée est utile.
- Mobile, tactile, clavier et reduced motion sont équivalents fonctionnellement.
- Les listeners, observateurs, scènes ou ressources sont nettoyés au bon
  moment.
- Chargement différé et mesure sur appareil représentatif avant d’accepter un
  coût GPU ou dépendance.
- L’essai est rejeté si la valeur n’est pas démontrée.

### G6 — P6 Stabilisation

- Format, lint, `astro check` et build passent; erreurs/hints connus sont
  documentés et les régressions nouvelles résolues.
- Routes critiques EN/FR, liens, assets, état sans JS, thèmes, clavier et
  viewports prévus sont revus.
- Console, métadonnées, confidentialité et performance sont examinées.
- Tests échoués, omissions et limites sont signalés sans score inventé.
- Écart entre l’accueil, les pages et les faits vérifiés résolu.

### G7 — P7 Livraison

- Domaine, hébergement, configuration, sortie, redirections et rollback sont
  confirmés.
- Build de production et smoke tests de prévisualisation passent.
- Un contrôle final confirme l’absence de preuves ou secrets non autorisés dans
  les artefacts publiables.
- L’utilisateur autorise explicitement chaque publication, déploiement, action
  DNS, commit ou push pertinente; sinon aucune de ces actions n’a lieu.

## Arrêt immédiat / escalade humaine

Arrêter le changement concerné et demander arbitrage avant : migration ou
refonte d’architecture; suppression/régression d’une fonctionnalité; altération
significative de l’identité; changement de règles de confidentialité;
publication ou déploiement; traitement de capture sensible; affirmation
factuelle non vérifiable; action destructive; coût de service ou collecte de
données; ajout d’une dépendance structurante.

## Critères communs de rejet

- Une information essentielle ou une destination n’existe qu’au survol ou après
  animation.
- Une langue, un viewport, le clavier ou reduced motion perd du contenu.
- Une preuve suggère un résultat, déploiement, utilisateur ou fonctionnement non
  vérifié.
- Une tâche ou une phase avance alors que son gate humain ou technique n’est pas
  satisfait.
