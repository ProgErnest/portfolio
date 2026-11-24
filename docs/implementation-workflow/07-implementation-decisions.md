# Journal des décisions d’implémentation

Ce journal distingue une observation factuelle d’une décision approuvée. Une
proposition créative n’est pas une autorisation d’implémenter. Ajouter chaque
décision matérielle avec date, contexte, options, choix, justification,
conséquences et approbation.

## 2026-11-23 — P0 limité à la préparation

- **Contexte :** mission initiale de pilotage, explicitement sans modification du
  code applicatif.
- **Options :** commencer une partie du design ou limiter l’action au workflow.
- **Décision :** limiter P0 à l’audit et aux documents d’implémentation.
- **Justification :** respecter le périmètre et obtenir une validation avant P1.
- **Conséquences :** aucune route, dépendance, contenu ou configuration
  applicative n’est modifiée; le suivi P0 reste en attente d’acceptation.
- **Approbation :** portée demandée par l’utilisateur; validation du résultat
  encore attendue.

## 2026-11-23 — Maintien de l’architecture statique existante

- **Contexte :** le site se construit déjà en 22 routes statiques avec Astro
  7.4.12, Tailwind CSS 4 et TypeScript; pas de runtime React.
- **Options :** migrer ou ajouter un framework, ou continuer avec Astro et API
  natives.
- **Décision :** préserver Astro statique-first; pas de migration ni nouvelle
  dépendance pendant P0.
- **Justification :** le dépôt satisfait déjà le modèle de contenu et les
  besoins observés; la conception propose CSS/SVG/natif en premier et reporte
  les moteurs.
- **Conséquences :** toute nouvelle dépendance doit avoir un cas d’usage
  mesurable, une analyse de compatibilité et l’approbation requise.
- **Approbation :** cohérent avec les décisions de projet existantes; aucune
  nouvelle migration n’est approuvée.

## 2026-11-23 — Filtres CSS et composants existants comme base

- **Contexte :** l’index utilise des radios natifs, CSS `:has()` et un affichage
  progressif; les fiches bilingues proviennent d’un modèle et de données typées.
- **Options :** remplacer ou prolonger ces mécanismes.
- **Décision :** préserver et évaluer l’existant avant toute réécriture.
- **Justification :** comportement présent, faible coût client et fallback
  adapté à l’approche créative statique.
- **Conséquences :** toute nouvelle fonction doit conserver les affordances et
  routes EN/FR; tests de fallback obligatoires.
- **Approbation :** décision technique locale, réversible, sans changement de
  code dans P0.

## 2026-11-23 — Autorisation explicite des captures HSVP fournies

- **Contexte :** 37 captures HSVP-Hub sont suivies sous `docs/Captures/`;
  un rapport antérieur notait la présence de libellés institutionnels/de
  processus. La visibilité externe du dépôt n’a pas été vérifiée.
- **Options :** exclure les captures, les modifier, ou les utiliser telles
  quelles sur autorisation explicite.
- **Décision :** l’utilisateur confirme qu’il a créé toutes les captures, que
  les données sont fictives et qu’il autorise leur utilisation telles quelles,
  y compris les libellés visibles.
- **Justification :** respecter la confirmation directe du propriétaire tout en
  maintenant l’interdiction d’ajouter des données réelles, secrets ou détails
  confidentiels non couverts par cette autorisation.
- **Conséquences :** P1-04 est terminé. Les captures fournies peuvent être
  utilisées; cette autorisation ne valide pas d’autres faits ou ressources.
- **Approbation :** utilisateur, 23 novembre 2026.

## 2026-11-23 — Lien Auction Bids maintenu sous gate

- **Contexte :** la documentation projet rapporte un `.env.prod` présent dans le
  dépôt externe Auction Bids, sans contenu consulté ni suppression de
  l’historique confirmée. L’utilisateur prévoit de le supprimer de l’historique
  ultérieurement.
- **Options :** ajouter le lien maintenant ou le garder absent jusqu’à
  suppression et vérification.
- **Décision :** ne pas ajouter le lien avant confirmation documentée que le
  fichier a été retiré de l’historique Git publié.
- **Justification :** ne pas envoyer les visiteurs vers un dépôt dont un fichier
  potentiellement sensible reste signalé.
- **Conséquences :** tâche P1-03 bloquée; pas de contenu secret recopié dans ce
  dépôt ou ce journal. Si des valeurs ont été exposées, leur rotation relève du
  mainteneur du dépôt.
- **Approbation :** contrainte de sécurité existante; confirmation propriétaire
  encore attendue.

## 2026-11-23 — Primitives P2 natives et CSS

- **Contexte :** P2 requiert des tokens et primitives de mouvement minimaux,
  sans généraliser les transitions globales ni implémenter P3.
- **Options :** ajouter une bibliothèque de motion, utiliser uniquement CSS/états
  natifs, ou différer toute amélioration.
- **Décision :** centraliser les durées, easing et distances dans
  `src/styles/global.css`; exposer les primitives locales `data-motion="reveal"`
  et `data-motion="evidence"`; conserver le rendu statique comme état par défaut
  et désactiver les effets sous reduced motion.
- **Justification :** ce choix couvre le besoin observé du spécimen P2 sans
  ajouter de package, de runtime ou de cycle de vie global.
- **Conséquences :** le spécimen EN/FR montre les primitives; aucune page de
  contenu ni navigation globale n’est encore animée. Le passage à P3 reste
  requis pour une intégration complète du shell et du Hero.
- **Approbation :** incrément terminé à la demande explicite de l’utilisateur
  de terminer P2; l’intégration globale reste conditionnée à P3.

## 2026-11-23 — Sélection de seize composants immersifs

- **Contexte :** l’utilisateur a sélectionné explicitement des composants pour
  l’accueil, À propos, les projets, les études de cas, les compétences,
  l’expérience et le contact.
- **Options :** intégrer immédiatement tout l’atelier, retenir une partie,
  ou conserver les propositions exploratoires.
- **Décision :** retenir uniquement les identifiants `H01/H02/H03`,
  `A01/A03`, `P03/P04`, `C01/C02/C04`, `S01/S02`, `E01/E02` et `X01/X03`.
- **Justification :** respecter l’arbitrage humain et empêcher qu’un composant
  non choisi soit promu implicitement à une décision de production.
- **Conséquences :** la sélection complète est enregistrée dans
  `08-creative-selections.md`; l’intégration dans Astro reste une mission
  ultérieure distincte avec validation responsive, clavier, motion réduite,
  contenu EN/FR et confidentialité.
- **Approbation :** utilisateur, 23 novembre 2026.

## 2026-11-23 — Transitions cinématiques, navigation mixte et canvas épars

- **Contexte :** la sélection des composants immersifs exige une grammaire
  commune pour les entrées, les changements de page et les arrière-plans.
- **Options :** privilégier un shell instrumental, des scènes cinématiques,
  une profondeur spatiale ou une approche mixte.
- **Décision :** utiliser des transitions hybrides selon les sections, un
  échange cinématique par masque pour les routes, une navigation mixte et un
  canvas épars suspendu hors nécessité.
- **Justification :** cette combinaison donne une signature expressive sans
  rendre chaque page uniforme ni remplacer le contenu vérifié par un effet.
- **Conséquences :** budget de deux scènes principales par page; routeur,
  Canvas, lifecycle et tests restent différés à un prototype P3/P5 dédié.
- **Approbation :** utilisateur, 23 novembre 2026.

## Arbitrages humains en attente

### 2026-11-23 — Architecture native-first, moteurs différés

- **Contexte :** le code est un site Astro statique avec interactions client
  locales; aucune séquence GSAP ni scène 3D n’est implémentée ou choisie.
- **Options :** installer GSAP/Three.js dès maintenant ou conserver les API
  natives et prototyper seulement un cas prouvé.
- **Décision :** CSS/SVG/WAAPI/IntersectionObserver d’abord; GSAP avec
  ScrollTrigger facultatif pour une unique séquence complexe approuvée; Three.js
  uniquement après échec d’une preuve statique et accord explicite.
- **Justification :** cohérence avec la stack Astro, le statique-first et les
  décisions des références; aucun coût de dépendance sans bénéfice démontré.
- **Conséquences :** aucune dépendance installée. Les poids bundles sont à
  mesurer seulement au prototype; ne pas généraliser l’architecture avant les
  tests lifecycle/performance.
- **Approbation :** décision locale réversible, dans les orientations créatives
  existantes; validation P1 utilisateur encore attendue.

### 2026-11-23 — ClientRouter conservé hors P1

- **Contexte :** Astro 7.4.12 inclut `ClientRouter`, mais le site utilise une
  navigation complète et ses scripts menu/thème ciblent les éléments du
  document courant.
- **Options :** activer le routeur maintenant ou conserver la navigation native
  et traiter les transitions dans P3.
- **Décision :** ne pas activer `ClientRouter` en P1; garder son adoption et ses
  transitions dans le gate P3 après test d’initialisation/nettoyage.
- **Justification :** éviter de casser ou dupliquer des listeners et respecter
  la limite de périmètre P3.
- **Conséquences :** navigation standard maintenue; back/forward et focus
  restent à tester avant une éventuelle intégration.
- **Approbation :** choix conservateur conforme à la roadmap; validation P1
  utilisateur encore attendue.

## Arbitrages humains en attente

1. Approuver ou réviser la thèse créative « Field System / Living Proof ».
2. Définir le degré d’asymétrie acceptable.
3. Valider le dispositif EP du Hero et le traitement des preuves.
4. Choisir le premier prototype SVG, ou confirmer qu’il n’est pas nécessaire.
5. Résoudre `.env.prod` avant toute publication du dépôt Auction Bids.
6. Confirmer hébergement/domaine avant P7.

## Modèle pour une nouvelle entrée

```text
## YYYY-MM-DD — Titre
- Contexte :
- Options considérées :
- Décision :
- Justification :
- Conséquences :
- Approbation : utilisateur / agent dans le périmètre approuvé
```
