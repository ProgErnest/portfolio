# Demande de contenu et de preuves — G5

## Objectif

Réunir les faits publiables et leurs preuves pour finaliser le contenu des
quatre fiches projet. Ce questionnaire couvre aussi la vérification des liens,
des technologies, des traductions et des placeholders prévus par G5 dans la
[roadmap](./DEVELOPMENT_ROADMAP.md).

Il n’est pas nécessaire de remplir un champ si l’information n’existe pas ou
ne peut pas être publiée. Écrivez alors explicitement `Aucun`, `Non applicable`,
`Non confirmé` ou `À ne pas publier`. Ne devinez pas.

## Règles de confidentialité et de publication

- Ne transmettez aucun mot de passe, jeton, secret, donnée personnelle de tiers,
  code privé ou lien vers un dépôt privé.
- N’envoyez aucune donnée de patient, dossier identifiable, véritable
  identifiant, capture d’un système hospitalier réel, ni détail opérationnel
  sensible. Pour HSVP Hub, seules les catégories de fonctionnalités et les
  technologies explicitement communiquées et autorisées par le propriétaire
  peuvent être publiées ; ne nommez pas l’établissement associé.
- Pour HSVP Hub, indiquez `Aucune preuve visuelle publiable` si vous ne disposez
  pas d’un support entièrement synthétique et expressément autorisé.
- Pour JED, ne communiquez ni identité ni détail confidentiel du client. Ne
  déclarez pas l’acceptation client sans confirmation et autorisation
  explicites.
- Ne demandez pas à l’agent d’inventer une maquette ou une capture pour servir
  de preuve d’un produit réel.
- Un élément fourni n’est pas automatiquement publiable : confirmez son
  autorisation de publication pour chaque dépôt, capture, démonstration ou
  citation.

## Informations déjà reçues

Ne les renvoyez que si elles ont changé ou si vous souhaitez les corriger.

| Projet             | Faits déjà communiqués                                                                                                                                                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HSVP Hub           | Étude de cas académique hospitalière réalisée individuellement dans un contexte de stage et soutenue académiquement ; V1.0 fonctionnelle ; refonte/refactor V2.0 en cours vers une plateforme plus intégrée ; déploiement en production non vérifié. |
| JED                | Projet client réalisé individuellement ; implémentation terminée et application déployée, selon la confirmation du propriétaire.                                                                                                                     |
| Auction Bids       | Projet personnel réalisé individuellement ; partiellement fonctionnel et en reconstruction.                                                                                                                                                          |
| Library Management | Projet personnel réalisé individuellement ; V1 fonctionnelle ; workflows et expérience utilisateur à améliorer.                                                                                                                                      |

Les quatre projets ont été décrits comme réalisés individuellement. Les
informations de stages ont déjà été reçues pour G4. Les technologies
communiquées sont Django dans le contexte du stage HooYia, et CodeIgniter 4 et
Symfony pour le travail backend/API chez DevCode Camer. **Cela ne confirme pas
encore quels projets précis utilisent chacune de ces technologies.**

## Formulaire commun — à remplir pour chaque projet

Copiez cette section une fois pour chaque projet. Utilisez des faits datés,
précis et vérifiables. Pour chaque affirmation, indiquez soit sa preuve, soit
`Aucune preuve disponible`.

### Identification et état

- **Nom public du projet :**
- **Statut actuel (à la date du jour) :**
- **Ce qui fonctionne réellement dans la version actuelle :**
- **Ce qui est en cours, incomplet ou non vérifié :**
- **L’affirmation de la roadmap ci-dessus est-elle toujours exacte ?**
  - [ ] Oui
  - [ ] Non — correction :

### Présentation publique

- **Résumé publiable (2 à 4 phrases) :**
- **Problème ou besoin auquel le projet répond, si publiable :**
- **Public visé/utilisateurs, uniquement si confirmé et publiable :**
- **Nom de client, organisation ou contexte dont la mention est autorisée :**
- **Détails à exclure de la publication :**

### Fonctionnalités et affirmations

Ajoutez une ligne par fonctionnalité ou affirmation que vous souhaitez voir
publiée. Précisez la version et l’état afin de ne pas présenter une idée comme
une fonctionnalité réalisée.

| Fonctionnalité ou affirmation exacte | Version | État actuel (fonctionnel, partiel, en cours, prévu, non vérifié) | Preuve/source | Autorisée à la publication ? |
| ------------------------------------ | ------- | ---------------------------------------------------------------- | ------------- | ---------------------------- |
|                                      |         |                                                                  |               | Oui / Non                    |
|                                      |         |                                                                  |               | Oui / Non                    |

### Technologies et responsabilités

N’indiquez que les technologies effectivement utilisées. Si la version est
inconnue, écrivez `Version non confirmée`.

| Technologie et version, si connue | Où/comment elle est utilisée dans ce projet | Source de vérification | Confirmée pour publication ? |
| --------------------------------- | ------------------------------------------- | ---------------------- | ---------------------------- |
|                                   |                                             |                        | Oui / Non                    |
|                                   |                                             |                        | Oui / Non                    |

- **Votre contribution personnelle précise :**
- **Réalisation individuelle toujours exacte pour ce projet ?**
  - [ ] Oui
  - [ ] Non — préciser :

### Résultats et limites

- **Résultat vérifiable obtenu, s’il y en a un :**
- **Mesure ou métrique, sa méthode de calcul et sa preuve, si applicable :**
- **Limites connues ou améliorations restantes :**
- **Aucun résultat mesuré ou publiable ?**
  - [ ] Oui
  - [ ] Non — détails et preuve :

N’indiquez pas de nombre d’utilisateurs, de performance, de gain, d’adoption
ou d’impact commercial sans preuve vérifiable et autorisation de publication.
Pour HSVP Hub, le déploiement en production n’est pas vérifié.

### Captures, démonstrations et autres preuves

Indiquez les fichiers fournis ou leurs chemins dans le workspace. Une preuve
visuelle est facultative : si elle n’est pas disponible ou autorisée, la fiche
peut rester textuelle.

| Fichier ou URL publique | Ce que l’élément démontre | Version/date | Données sensibles retirées ou support synthétique ? | Autorisation de publication confirmée ? |
| ----------------------- | ------------------------- | ------------ | --------------------------------------------------- | --------------------------------------- |
|                         |                           |              | Oui / Non / Sans objet                              | Oui / Non                               |

- **Aucune capture ou démonstration publiable :**
  - [ ] Confirmé — ne pas en demander ni en fabriquer.

### Dépôt et démonstration publics

Ne fournissez que des URL publiques qui s’ouvrent sans compte privé, mot de
passe ou jeton. L’autorisation de créer un lien vers un dépôt doit être
explicite.

- **URL du dépôt public :**
- **Ce dépôt correspond bien à ce projet :**
  - [ ] Oui
  - [ ] Non
- **Autorisation d’ajouter ce lien au portfolio :**
  - [ ] Oui
  - [ ] Non
  - [ ] Aucun dépôt public à publier
- **URL de démonstration publique, si disponible :**
- **Cette démonstration peut-elle être liée publiquement ?**
  - [ ] Oui
  - [ ] Non
  - [ ] Aucune démonstration publique

### Publication

- **Décision pour cette fiche :**
  - [ ] Publier les faits confirmés uniquement
  - [ ] Publier le statut actuel uniquement ; omettre les détails manquants
  - [ ] Ne rien ajouter avant une confirmation ultérieure
- **Noms, visuels ou autres éléments dont la publication est autorisée :**
- **Éléments à supprimer ou ne jamais afficher :**

---

## Questions propres à chaque projet

### HSVP Hub

Les éléments suivants ont été communiqués et autorisés le 23 novembre 2026 :

- V1.0 fonctionnelle ; refonte du socle V2.0 en cours, avec une plateforme
  hospitalière plus intégrée comme objectif.
- Fonctionnalités V1.0 : authentification et comptes, autorisations, dossiers
  patients, admissions, consultations, examens, séjours, transferts
  interservices et rendez-vous.
- Public : personnel administratif et de réception, médecins et praticiens,
  responsables de services, administrateurs et autres personnels hospitaliers
  autorisés.
- Technologies : Python 3.14, Django 6.0.7, PostgreSQL 18, Tailwind CSS 4,
  JavaScript natif, Celery, Mailpit, WhiteNoise, Git et GitHub Actions.
- Contribution : analyse des besoins, collecte d’informations sur le terrain,
  conception, modélisation, développement backend/frontend, modules métier,
  accès, tests et corrections.
- Limites : stabilisation de V2.0, validation des nouveaux workflows, tests
  approfondis et vérifications de sécurité, performance et déploiement réel.

Ne nommez pas l’établissement associé et ne publiez ni donnée réelle, capture
d’un système hospitalier, identifiant, résultat mesuré ou affirmation de
déploiement en production. Aucune capture HSVP Hub n’est autorisée pour le
portfolio dans l’état actuel des preuves.

### JED

L’implémentation est terminée et l’application est déployée, selon la
confirmation du propriétaire. La fiche publie ce statut et les fonctionnalités
confirmées. Aucun lien de dépôt, nom de client ou détail confidentiel n’est
publié. La capture JED existante est autorisée et utilise des données fictives.

N’ajoutez aucun résultat mesuré, environnement de déploiement ou autre détail
qui n’a pas été fourni.

### Auction Bids

Le projet reste partiellement fonctionnel et en reconstruction. Le dépôt public
et l’autorisation d’ajouter un lien ont été confirmés par le propriétaire. Le
dépôt contient toutefois un fichier `.env.prod` à sa racine ; son contenu n’a
pas été consulté. Ne pas ajouter le lien au portfolio avant confirmation qu’il
est assaini ou retiré. La capture de connexion existante est autorisée et
présente des valeurs fictives.

### Library Management

La V1 est fonctionnelle et les workflows/UX restent à améliorer. Le propriétaire
a autorisé le lien du dépôt public `library-project-django` et la capture du
catalogue avec des données fictives.

## Vérification des traductions EN/FR

Une fois les faits anglais validés, l’agent préparera la version française.
Pour chaque projet, relisez ensuite les termes techniques, le statut et les
phrases françaises.

| Projet             | Faits anglais validés ? | Version française relue ? | Corrections ou termes à conserver |
| ------------------ | ----------------------- | ------------------------- | --------------------------------- |
| HSVP Hub           | Oui / Non               | Oui / Non                 |                                   |
| JED                | Oui / Non               | Oui / Non                 |                                   |
| Auction Bids       | Oui / Non               | Oui / Non                 |                                   |
| Library Management | Oui / Non               | Oui / Non                 |                                   |

Les noms de projet, frameworks et identifiants de code restent inchangés si
nécessaire. Il n’est pas nécessaire de fournir une traduction littérale :
signalez plutôt les formulations inexactes ou les termes métier à conserver.

## Expérience et autres informations déjà reçues

Les périodes, rôles, organisations et tâches des stages HooYia et DevCode Camer
ont déjà été communiqués et intégrés en G4. **Ne les renvoyez pas**, sauf
correction, changement de statut ou autorisation à modifier.

Les coordonnées publiques ont également déjà été fournies et intégrées à la
page Contact. Elles ne sont pas à renvoyer pour G5.

## Réponse de synthèse — à renvoyer avec les quatre formulaires

- **Date de mise à jour des statuts projet :**
- **Les quatre projets sont-ils toujours réalisés individuellement ?**
  - [ ] Oui
  - [ ] Non — préciser le ou les projets concernés :
- **J’autorise la publication des affirmations, fichiers et URL marqués
  explicitement « Oui » dans les formulaires ci-dessus :**
  - [ ] Oui
  - [ ] Non — éléments concernés :
- **Pour tout champ non rempli, appliquer cette décision :**
  - [ ] Ne pas publier l’information
  - [ ] Conserver le statut actuellement confirmé sans détails supplémentaires
  - [ ] Attendre ma réponse avant toute publication
