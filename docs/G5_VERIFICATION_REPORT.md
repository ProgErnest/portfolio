# Rapport de vérification G5

Date de vérification : 22 novembre 2026

## Statut

Ce rapport sépare les informations vérifiables des éléments qui restent à
autoriser ou à prouver. Il ne remplace pas une capture, une démonstration ou
une confirmation client.

## Dépôts publics trouvés

Ces dépôts sont publics sous le compte GitHub `ProgErnest`. Leur présence ne
signifie pas encore que leur lien peut être publié sur le portfolio : il faut
une autorisation explicite pour chaque projet.

| Projet | Dépôt trouvé | Vérifications réalisées |
|---|---|---|
| JED | [JED-app](https://github.com/ProgErnest/JED-app) | Django 6.1.2 dans `requirements.txt`; PostgreSQL documenté comme moteur par défaut; SQLite conservé comme alternative; rapport de corrections et suite de tests présents. |
| Auction Bids | [auction_bids_platform](https://github.com/ProgErnest/auction_bids_platform) | PHP 8.2+, Symfony 7.4, API Platform et PostgreSQL 16 en Docker selon `composer.json` et `compose.yaml`. |
| Library Management | [library-project-django](https://github.com/ProgErnest/library-project-django) | Projet Django public avec Tailwind CSS. La relation avec la fiche `Library Management` est confirmée par le propriétaire comme étant le même projet. |
| HSVP Hub frontend | [front-end-tailwind-hsvp-hub](https://github.com/ProgErnest/front-end-tailwind-hsvp-hub) | HTML, Tailwind CSS 4 et JavaScript natif documentés pour l'interface; le dépôt ne prouve pas à lui seul un backend complet ni un déploiement hospitalier. |
| HSVP Hub interfaces | [html-interfaces-hsvp-hms](https://github.com/ProgErnest/html-interfaces-hsvp-hms) | Ressources de conception et interfaces HTML front-end trouvées. Aucune portée backend ou opérationnelle hospitalière n'est reprise dans le portfolio. |

## Technologies publiables à ce stade

### JED

Ces éléments sont vérifiés par les fichiers publics du dépôt :

- Python avec Django 6.1.2.
- PostgreSQL par défaut.
- SQLite comme moteur alternatif/documenté.
- HTML, CSS et JavaScript pour l'interface.
- WhiteNoise et Gunicorn dans la configuration de dépendances.

Les tests automatiques présents dans le dépôt ne constituent pas une acceptation
client ni une validation en production. Le site conserve donc le statut
« implémentation terminée ; tests et acceptation client en attente ».

### Auction Bids

Ces éléments sont vérifiés par les fichiers publics du dépôt :

- PHP 8.2 ou supérieur.
- Symfony 7.4.
- API Platform.
- PostgreSQL via Docker.

La reprise exacte des fonctionnalités dans la reconstruction reste non vérifiée.
Le projet reste présenté comme en reconstruction.

### HSVP Hub

Les dépôts publics vérifient seulement une partie frontend :

- HTML.
- Tailwind CSS 4.
- JavaScript natif.

Les références publiées dans le texte fourni ne peuvent pas établir seules un
backend Python/Django, une base PostgreSQL ou un déploiement. Elles ne doivent
pas être publiées sans vérification du dépôt backend ou d'une configuration
autorisée.

Les données, captures réelles, utilisateurs, processus et détails ERP
hospitaliers restent exclus.

### Library Management

Le dépôt nommé `library-project-django` correspond à la fiche
`Library Management`, selon la confirmation du propriétaire. Le dépôt vérifie
Django, Python, Celery, Redis et Tailwind CSS. La liste précise des workflows
restant à améliorer nécessite encore une vérification visuelle ou technique.

## Informations reçues mais non encore publiables

- Fonctionnalités détaillées de JED : la réponse fournie décrit trois activités,
  les ventes, stocks, dépenses et rapports. Le dépôt confirme une partie de ces
  éléments, mais les tests client et l'acceptation restent indépendants.
- Résultats chiffrés : aucune métrique d'exploitation ou impact financier ne
  doit être publiée à partir d'exemples de test.
- Offline, paiements Mobile Money et déploiement Render : non vérifiés et
  maintenus hors des fiches.
- Captures HSVP Hub : aucune capture réelle n'a été vérifiée ou autorisée.
- Captures JED, Auction Bids et Library Management : aucune capture récente
  vérifiée n'a été fournie.
- Déploiements publics : aucun état de production ne doit être revendiqué sans
  preuve vérifiable.

## Contenu déjà intégré au portfolio

La page de fiche projet affiche désormais les technologies vérifiées dans les
fichiers publics. Les règles suivantes restent actives :

- Les liens JED, Auction Bids et Library Management sont publiés uniquement
  après leur autorisation explicite.
- Aucun résultat chiffré n'est ajouté.
- Aucun détail confidentiel HSVP Hub n'est ajouté.
- JED conserve son statut de tests et acceptation en attente.
- Auction Bids conserve son statut de reconstruction.
- Library Management conserve son statut de V1 fonctionnelle sans stack
  attribuée.

## Autorisations nécessaires avant G5

Pour ajouter les liens, captures ou démonstrations publiques, confirmez :

1. Quelles captures peuvent être publiées et si elles ont été anonymisées.
2. Quelle démonstration publique peut être liée, si elle existe.
3. Pour JED, si les tests ou l'acceptation client ont été autorisés dans une
   formulation publique.
