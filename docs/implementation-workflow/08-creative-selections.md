# Sélections créatives approuvées — 23 novembre 2026

## Statut

Ces composants sont approuvés comme direction d’implémentation. Cette décision
est démontrée dans le spécimen bilingue du système de design. Elle n’intègre
pas encore les composants aux pages de production.

## Démonstration P2

Les 16 motifs retenus apparaissent dans `MotionSpecimen.astro`, intégré à la
référence du système de design. Les interactions y sont locales et les schémas
conceptuels sont identifiés comme tels. Cette démonstration ne transforme pas
les autres propositions de l’atelier en composants approuvés.

## Composants retenus

### Accueil

- `H01` — Orbital identity field.
- `H02` — Kinetic manifesto.
- `H03` — Scroll signal.

### À propos

- `A01` — Practice map.
- `A03` — Capability prism.

### Projets

- `P03` — Depth stack.
- `P04` — Status constellation.

### Études de cas

- `C01` — Split evidence stage.
- `C02` — Architecture unfolding.
- `C04` — Sequence reader.

### Compétences

- `S01` — Context matrix.
- `S02` — Skill constellation.

### Expérience

- `E01` — Vertical instrument.
- `E02` — Deferred detail drawer.

### Contact

- `X01` — Closing aperture.
- `X03` — Copy action.

## Composants non sélectionnés

Aucun composant absent de cette liste n’est approuvé pour intégration. En
particulier, les autres propositions de l’atelier restent des options
exploratoires jusqu’à sélection explicite.

## Contraintes communes

- Conserver Astro statique-first et le contenu dans le HTML initial.
- Aucun moteur d’animation, WebGL ou nouvelle dépendance sans besoin démontré
  et gate dédié.
- `prefers-reduced-motion: reduce` conserve une composition finale lisible,
  immédiate et complète.
- Les effets tactiles utilisent la même information que les interactions
  clavier et souris.
- Aucun élément animé ne doit cacher une destination, une information de
  statut, une limite de confidentialité ou une preuve essentielle.
- Les propositions P3/P4 sont localisées en anglais et en français.
- Les affirmations affichées doivent rester conformes aux informations
  vérifiées du portfolio.

## Adaptations à prévoir

- `H01` reste statique et lisible sur mobile; la profondeur pointer est
  progressive et limitée.
- `H02` ne masque pas le titre ni les actions du Hero.
- `H03` représente le vrai défilement du document, pas un faux chargement.
- `P03` reçoit une disposition plate sur tactile et étroite largeur.
- `C01` conserve le titre, la légende et le bouton de sortie hors animation.
- `C02` reste une architecture sémantique vérifiée, sans topologie inventée.
- `E01` ne doit pas être présenté comme une carrière professionnelle complète
  tant que les rôles et dates ne sont pas vérifiés.
- `E02` doit expliquer clairement les détails professionnels différés.
- `X01` ne doit pas devenir actif avant qu’un canal de contact public soit
  confirmé.

## Ordre d’implémentation proposé

1. Terminer le spécimen P2 et vérifier les primitives motion — terminé.
2. Implémenter `H01`, `H02`, `H03` dans le Hero lors de P3.
3. Implémenter `A01`, `A03`, `E01`, `E02` dans P4.
4. Implémenter `P03`, `P04`, puis les variantes bilingues.
5. Implémenter `C01`, `C02`, `C04` sur les études de cas vérifiées.
6. Implémenter `S01`, `S02`.
7. Implémenter `X01`, `X03` seulement avec une destination ou action vérifiée.

## Validation

Sélection enregistrée à partir de la liste fournie par l’utilisateur le
23 novembre 2026. Aucun fichier applicatif n’a été modifié dans cet incrément.
