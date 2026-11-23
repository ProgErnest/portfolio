# Rapport de vérification G5

Date de vérification : 23 novembre 2026

## Statut

Ce rapport sépare les faits confirmés des éléments qui restent à vérifier.
Le propriétaire autorise les liens Auction Bids et Library Management et
confirme que les captures sélectionnées utilisent des données fictives.
G5 reste `IN_PROGRESS` tant que le fichier `.env.prod` du dépôt Auction Bids
n’a pas été vérifié ou retiré.

## Vérification et publication des liens

Le dépôt JED n’est pas destiné à un usage public et aucun lien n’est ajouté.
Les deux dépôts publics autorisés ont été retrouvés sous le compte `ProgErnest`
et correspondent aux projets :

| Projet             | Accès et correspondance                                                                                                                                                             | Décision                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Auction Bids       | Public (HTTP 200), nom et correspondance vérifiés ; technologies confirmées par `composer.json`. Le fichier `.env.prod` est présent à la racine ; son contenu n’a pas été consulté. | Lien retenu jusqu’à confirmation qu’il est assaini ou retiré. |
| Library Management | Public (HTTP 200), correspondance confirmée par le propriétaire ; dépendances vérifiées dans `requirements.txt`.                                                                    | Lien public autorisé ajouté à la fiche.                       |

Le dépôt Library Management est lié à
`https://github.com/ProgErnest/library-project-django`. Le lien Auction Bids
reste retenu malgré l’autorisation du propriétaire, par précaution face au
fichier d’environnement publié.

## Technologies vérifiées

Les éléments ci-dessous sont présentés comme stack vérifiée dans les fiches.
Ils ne constituent pas des revendications de fonctionnalité ou de déploiement.

| Projet             | Technologies confirmées                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JED                | Python, Django 6.1.2, PostgreSQL (moteur par défaut documenté), SQLite (alternative documentée), HTML, CSS, JavaScript. Les dépendances incluent également WhiteNoise et Gunicorn. L’application est déclarée déployée par le propriétaire. |
| Auction Bids       | PHP 8.2+, Symfony 7.4, API Platform, PostgreSQL 16 dans la configuration Docker.                                                                                                                                                            |
| Library Management | Python, Django 6.0+, Celery, Redis et Tailwind CSS. La fiche omet les versions exactes des autres composants.                                                                                                                               |
| HSVP Hub           | Python 3.14, Django 6.0.7, PostgreSQL 18, Tailwind CSS 4, JavaScript natif, Celery, Mailpit, WhiteNoise, Git et GitHub Actions, selon la configuration technique communiquée par le propriétaire.                                           |

Pour JED, les fonctions confirmées comme opérationnelles sont la gestion des
ventes, des stocks, des dépenses et des rapports.

Pour HSVP Hub, le propriétaire autorise la publication des fonctionnalités
V1.0, des groupes d’utilisateurs, de sa contribution et des limites fournis.
La V2.0 est en refonte ; l’évolution vers une plateforme plus intégrée est un
objectif de conception. Le déploiement en production hospitalière n’est pas
vérifié. Aucun nom d’établissement, donnée réelle ou capture hospitalière
n’est publié.

## Captures et preuves publiables

L’inventaire local comporte 56 fichiers : 37 HSVP Hub, 6 JED, 8 Auction Bids
et 5 Library Management. Trois captures autorisées sont copiées sans
modification dans `public/images/projects/` :

- JED — tableau des indicateurs de la boutique (`1920×2300`) ; la légende
  précise que noms et montants sont fictifs, et non des résultats du projet.
- Auction Bids — écran de connexion BidSphere (`360×760`) ; aucun identifiant
  de compte ni donnée personnelle n’est inclus.
- Library Management — catalogue de livres (`1920×910`) ; la légende précise
  que le compte et les données de disponibilité sont fictifs.

Aucune capture HSVP Hub n’est publiée. L’écran de connexion examiné expose
l’institution et des libellés de processus hospitaliers ; les données fictives
des autres captures n’autorisent pas la publication de cet écran.

Preuves textuelles publiables : les statuts et informations confirmés par le
propriétaire, les technologies vérifiées ci-dessus, les fonctionnalités listées
sur les fiches et le déploiement déclaré de JED. Aucun résultat chiffré ni
déploiement hospitalier HSVP Hub n’est revendiqué.

## Contenu et traductions vérifiés

- HSVP Hub : V1.0 fonctionnelle ; refonte/refactor V2.0 en cours, avec une
  plateforme plus intégrée comme objectif. Les fonctionnalités, utilisateurs,
  contribution, limites et technologies sont présentés en EN/FR sans nommer
  l’établissement ni publier de capture hospitalière.
- JED : implémentation terminée et application déployée selon le propriétaire ;
  ventes, stocks, dépenses et rapports fonctionnels. Aucun lien de dépôt n’est
  ajouté.
- Auction Bids : partiellement fonctionnel et en reconstruction dans les deux
  langues.
- Library Management : V1 fonctionnelle ; workflows et UX à améliorer dans les
  deux langues.
- Les noms de projets et technologies restent inchangés. Chaque fiche est
  accessible sous sa route EN et sa route FR correspondante.
- Les informations restantes apparaissent dans une section localisée
  « Information to complete / Information à compléter », et non comme
  placeholders vides.

## Contrôles exécutés

- `npm run format:check` : réussi.
- `npm run lint` : réussi.
- `npm run check` : réussi ; 0 erreur, 0 warning, 30 indications de
  modernisation JSDoc.
- `npm run build` : réussi ; 22 routes statiques générées.
- Vérification du HTML généré : les quatre fiches EN/FR et les deux index
  existent, les statuts, technologies et sections d’informations à compléter
  sont présents, le lien Library Management est rendu, aucun lien JED ou
  Auction Bids n’est rendu et `docs/Captures/` n’est pas inclus dans la sortie
  de production.
- Revue navigateur des huit routes de fiches EN/FR : statuts et technologies
  cohérents, équivalents de langue accessibles, captures chargées et légendes
  présentes.
- Contrôle responsive ciblé : affichage bureau sur les fiches avec capture,
  puis formats mobile (390 px) et tablette (768 px) sur Library Management ;
  aucun débordement horizontal constaté.
- Thèmes sombre et clair vérifiés sur une fiche ; la navigation clavier place
  le focus visible sur le lien « Aller au contenu / Skip to content ».
- La revue responsive, d’accessibilité et de confidentialité complète de
  l’ensemble du site reste à réaliser en G6.

## Blocages avant clôture G5

1. Confirmer que le fichier `.env.prod` du dépôt Auction Bids est assaini ou le
   retirer avant d’ajouter le lien au portfolio.
