# Arbitrage des transitions, navigation et arrière-plan

**Date :** 23 novembre 2026

## Décisions approuvées

### Direction principale

- **Transitions entre sections :** cinématiques, mais hybrides selon la section.
- **Navigation :** approche mixte, sans remplacer le shell flottant par une
  navigation unique imposée.
- **Arrière-plan :** canvas spatial épars.
- **Intensité :** mesurée.
- **Budget :** jusqu’à deux scènes principales par page, plus les micro-réponses
  locales strictement utiles.

### Révélations de section

Le rendu peut utiliser, selon le contenu :

- une ouverture par masque ou aperture ;
- une découpe verticale ;
- une construction typographique suivie de l’établissement de la preuve.

Une cascade automatique de cartes ou de sections n’est pas approuvée.

### Transition de route

- Approche d’implémentation : échange cinématique avec masque vertical.
- La navigation reste native et fonctionnelle pendant le chargement.
- Les liens, les destinations, le focus, le clavier et l’URL ne dépendent pas
  de la transition.
- La compatibilité exacte de l’API Astro doit être prototypée avant activation.
- En cas d’échec du prototype : conserver la navigation standard sans modifier
  les liens ni le contenu.

### Navigation mixte

Le shell desktop peut conserver son caractère flottant. Une navigation mobile
adaptée, un rail de section et les contrôles de langue/thème peuvent être
combinés sans masquer le contenu ou piéger le focus.

La décision finale du shell est différée à P3, après revue responsive et
accessibilité.

### Arrière-plan

- Utiliser un canvas épars comme profondeur de scène, pas comme télémetrie
  factice.
- Limiter les formes aux zones où l’arrière-plan explique identité, structure
  ou relation.
- Suspendre le canvas hors viewport et lorsque l’onglet est masqué.
- Ne pas lancer le canvas sur une page ou un appareil dont le budget n’est pas
  adapté.
- Ne pas surcharger les interactions avec une lecture/écriture de layout à
  chaque frame.

## Contraintes non négociables

- `prefers-reduced-motion: reduce` désactive les masques, canvas et scènes
  cinématiques.
- Le contenu final reste intégralement visible sans JavaScript.
- Toutes les animations ont une sortie statique.
- Les états du clavier, du tactile et du pointeur conservent les mêmes actions
  et informations.
- Les transitions ne retardent pas la navigation ni ne déplacent le focus.
- Le budget maximal initial ne doit pas transformer une page en démonstration
  technologique au détriment du contenu.

## Stratégie de performance

- Aucun canvas global permanent sur toutes les routes.
- Démarrage différé, proche du Hero ou de la zone concernée.
- Suspension sur viewport masqué, document caché, batterie ou capacité limitée.
- Mesure avant conservation : JavaScript, layout, scroll, clavier, mobile,
  back/forward et consommation CPU.
- Pas de GSAP, Three.js ou routeur global sans prototype isolé approuvé.

## Ordre de travail proposé

1. Terminer P2, les tokens motion et les fallbacks réduits — terminé; voir
   `04-progress-tracker.md`.
2. Produire un prototype isolé du masque de route et du lifecycle.
3. Valider le shell mixte sur mobile/tablette/bureau.
4. Implémenter les sections uniquement après leur preuve visuelle.
5. Ajouter le canvas épars après validation des composants Hero.
6. Exécuter les tests navigateur, focus, back/forward et reduced motion.

## Hors périmètre actuel

Cette décision ne constitue pas une autorisation d’implémenter le routeur,
les transitions ou le canvas. Elle définit seulement les arbitrages créatifs
pour les prochaines missions P3/P4/P5.
