# Exercices 2.6.-2.10.

Dans le premier exercice, nous commencerons à travailler sur une application qui sera développée plus en détail dans les exercices suivants. Dans les ensembles d'exercices connexes, il suffit de renvoyer la version finale de votre application. Vous pouvez également faire un commit séparé après avoir terminé chaque partie de l'ensemble d'exercices, mais cela n'est pas obligatoire.

AVERTISSEMENT create-react-app transformera automatiquement votre projet en un référentiel git à moins que vous ne créiez votre application à l'intérieur d'un référentiel git existant. Il est probable que vous ne vouliez pas que votre projet soit un référentiel, alors exécutez simplement la commande rm -rf .git à la racine de votre application.

## 2.6 : Le répertoire Étape 1

Créons un répertoire téléphonique simple. Dans cette partie, nous n'ajouterons que des noms au répertoire.

Commençons par implémenter l'ajout d'une personne au répertoire.

Vous pouvez utiliser le code ci-dessous comme point de départ pour le composant App de votre application :

```jsx
import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  );
};

export default App;
```

L' état newName est destiné à contrôler l'élément d'entrée du formulaire.

Parfois, il peut être utile de rendre l'état et d'autres variables sous forme de texte à des fins de débogage. Vous pouvez temporairement ajouter l'élément suivant au composant rendu :

```jsx
<div>debug: {newName}</div>
```

Il est également important de mettre à profit ce que nous avons appris dans le chapitre sur le débogage des applications React de la première partie. L' extension des outils de développement React , en particulier, est incroyablement utile pour suivre les changements qui se produisent dans l'état de l'application.

Après avoir terminé cet exercice, votre application devrait ressembler à ceci :

contenu complet
Notez l'utilisation de l'extension des outils de développement React dans l'image ci-dessus !

NB :

vous pouvez utiliser le nom de la personne comme valeur de la propriété key
n'oubliez pas d'empêcher l'action par défaut de soumettre des formulaires HTML !

---

## 2.7 : Le répertoire Étape 2

Empêcher l'utilisateur d'ajouter des noms qui existent déjà dans le répertoire. Les tableaux JavaScript ont de nombreuses méthodes appropriées pour accomplir cette tâche. Gardez à l'esprit le fonctionnement de l'égalité des objets en Javascript.

Émettez un avertissement avec la commande alert lorsqu'une telle action est tentée :

contenu complet
Astuce : lorsque vous formez des chaînes contenant des valeurs à partir de variables, il est recommandé d'utiliser un modèle de chaîne :

`${newName} is already added to phonebook`
Si la variable newName contient la valeur Arto Hellas , l'expression de chaîne de modèle renvoie la chaîne

`Arto Hellas is already added to phonebook`
La même chose pourrait être faite d'une manière plus semblable à Java en utilisant l'opérateur plus :

newName + ' is already added to phonebook'
L'utilisation de chaînes de modèle est l'option la plus idiomatique et le signe d'un vrai professionnel de JavaScript.

---

## 2.8 : Le répertoire Étape 3

Développez votre application en permettant aux utilisateurs d'ajouter des numéros de téléphone au répertoire téléphonique. Vous devrez ajouter un deuxième élément d' entrée au formulaire (avec son propre gestionnaire d'événements) :

```jsx
<form>
  <div>
    name: <input />
  </div>
  <div>
    number: <input />
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>
```

À ce stade, l'application pourrait ressembler à ceci. L'image affiche également l'état de l'application à l'aide des outils de développement React :
contenu complet

---

## 2.9\* : Le répertoire Step4

Implémentez un champ de recherche qui peut être utilisé pour filtrer la liste des personnes par nom :

contenu complet
Vous pouvez implémenter le champ de recherche en tant qu'élément d' entrée placé en dehors du formulaire HTML. La logique de filtrage affichée dans l'image est insensible à la casse , ce qui signifie que le terme de recherche arto renvoie également des résultats contenant Arto avec un A majuscule.

NB : Lorsque vous travaillez sur de nouvelles fonctionnalités, il est souvent utile de "coder en dur" certaines données factices dans votre application, par exemple

```jsx
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  // ...
};
```

Cela vous évite d'avoir à entrer manuellement des données dans votre application pour tester votre nouvelle fonctionnalité.

---

## 2.10 : Le répertoire Étape 5

Si vous avez implémenté votre application dans un seul composant, refactorisez-le en extrayant les parties appropriées dans de nouveaux composants. Conservez l'état de l'application et tous les gestionnaires d'événements dans le composant racine de l' application .

Il suffit d'extraire trois composants de l'application. De bons candidats pour des composants séparés sont, par exemple, le filtre de recherche, le formulaire d'ajout de nouvelles personnes dans l'annuaire, un composant qui affiche toutes les personnes de l'annuaire et un composant qui affiche les détails d'une seule personne.

Le composant racine de l'application pourrait ressembler à ceci après la refactorisation. Le composant racine refactorisé ci-dessous n'affiche que les titres et laisse les composants extraits s'occuper du reste.

```jsx
const App = () => {
// ...

return (

<div>
<h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm
        ...
      />

      <h3>Numbers</h3>

      <Persons ... />
    </div>

)
}
```

NB : Vous risquez de rencontrer des problèmes dans cet exercice si vous définissez vos composants "au mauvais endroit". Ce serait maintenant le bon moment pour répéter le chapitre Ne pas définir un composant dans un autre composant de la dernière partie.
