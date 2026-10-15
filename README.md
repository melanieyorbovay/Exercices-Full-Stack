# Exercices-Full-Stack

Solutions d'exercices consacré au développement web moderne avec JavaScript. (exercices du cours [Full Stack Open](https://fullstackopen.com/fr/), un cours en ligne gratuit de l'Université d'Helsinki)

Ceci est un dépôt pour suivre ma progression. Un tag Git est marqué à chaque étape terminée, permettant de consulter le code tel qu'il était à la fin de l'exercice.

## Technologies

- React
- Vite
- JavaScript (ES6+)

## Structure

```
fullstackopen/
├── part1/
│   └── unicafe/      application de collecte de retours clients
└── part2/
    └── phonebook/    répertoire téléphonique
```

Chaque dossier est un projet Vite indépendant. Pour lancer une application :

```bash
cd <partie>/<application>
npm install
npm run dev
```

## Progression

### Partie 1 : les bases de React

**Unicafe** : application qui prend les avis (bon, neutre, mauvais) et en affiche les statistiques.

| Étape | Ce qui est travaillé                    | Tag                                                                             |
| ----- | --------------------------------------- | ------------------------------------------------------------------------------- |
| 1.09  | Affichage conditionnel des statistiques | [ex-1.09](https://github.com/melanieyorbovay/Exercices-Full-Stack/tree/ex-1.09) |

### Partie 2 : communiquer avec le serveur

**Phonebook** : répertoire téléphonique dans lequel on peut ajouter des personnes.

| Étape | Ce qui est travaillé                                       | Tag                                                                             |
| ----- | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 2.06  | Affichage d'une liste, formulaire contrôlé, ajout au state | [ex-2.06](https://github.com/melanieyorbovay/Exercices-Full-Stack/tree/ex-2.06) |
