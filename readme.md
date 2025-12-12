Tp 1 


Exercice 1 :
Ecrire une fonction qui prend un tableau de int et qui le trie par ordre croissant
Ecrire une série de test unitaire avec vitest sur cette fonction qui teste son bon fonctionnement

Exercice 2:
A partir de l’implémentation suivante:
export function factorial(n) {
if (typeof n !== "number" || Number.isNaN(n)) {
throw new TypeError("n must be a number")
}
}
}
if (n < 0) {
throw new RangeError("n must be non-negative")
if (n === 0 || n === 1) {
return 1
let result = 1 

for (let i = 2; i <= n; i++) {
result *= i
}
return result
}
Écrire une série de test qui obtient une couverture de 100% sur ce fichier

Exercice 3:
Algorithme RLE:
L’algorithme sert à compresser des images en noir et blanc. Une image est une suite de pixel ayant
une couleur.
Pour représenter une image en noir et blanc, on peut utiliser une string composé de W (white)
pour un pixel blanc et B(black) pour un pixel noir.
exemple :
WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWW
WWWWWWWBWWWWWWWWWWW
On peut réduire la taille de cette string en utilisant l’algorithme RLE.
Il consiste à indiquer pour chaque suite de pixels d'une même couleur le nombre de pixels de cette
séquence suivi de la couleur en question.
On obtient, par exemple, pour la ligne précédente :
12W1B14W3B23W1B11W
---
1 - A partir de l’implémentation de l’algorithme RLE suivante, quels sont les tests les plus
pertinents à écrire?
function RLE(s)
{
var result = "";
var current_char = s.charAt(0);
var count = 1;
for(var i = 1; i < s.length ; i++)
{
if ( current_char != s.charAt(i) )
{
result += count;
result += current_char;
current_char = s.charAt(i);
count = 1;
}
else
{
}
count ++;
}
return result;
}
2 - L’implémentation donnée comporte une faute dans l’algorithme, corrigez la


Exercice 4 

A partir du code du fichier item.js :
1 - Comprendre le code et écrire une série de test qui obtient une couverture de 100%
2 - Implémenter une méthode Inventory.swapItems( index1, index2 ). La méthode doit lever une
Error si les index dépassent ceux du tableau. Écrire les tests qui permettent une couverture à 100%
3 - Implémenter une méthode Inventory.countItemByName( name ) qui retourne le nombre
d’occurrence d’item dans l’inventaire. Écrire les tests qui permettent une couverture à 100%
4 - Implémenter une méthode Inventory.getItemsCount() qui retourne un objet JS contenant en clé
le nom de l’item et en valeur le nombre d’occurrence de l’item
La méthode doit retourner des objets de type :
{
"Potion": 5,
"Sword": 1,
"Antidote": 3
}

TP 2 

Exercice 1 :
- Ecrire une fonction asynchrone wait qui retourne une promesse qui se résout automatiquement
au bout de 300 ms.
La fonction doit utiliser setTimeout
- Ecrire une test unitaire sur cette fonction asynchrone
- Créer un test unitaire qui test un appel vers l’API
https://jsonplaceholder.typicode.com/users/<id>


Exercice 2:
- Prendre le code de la fonction wait et ses tests unitaires et les publier sur un repository Github
- Ajouter un workflow Hithub Actions pour executer les tests lors d’un push ou d’une pull request
- Creer un dossier .github/workflows/ et ajouter un fichier test.yml ( ou utiliser l’interface
githubaActions
name: Run Vitest
on:
push:
branches:
- main
pull_request:
jobs:
test:
runs-on: ubuntu-latest
steps:
- name: Checkout repository
uses: actions/checkout@v4
- name: Setup Node.js
uses: actions/setup-node@v4
with:
node-version: '20'
cache: 'npm'
- name: Install dependencies
run: npm ci
- name: Run tests
run: npm test
- Vérifier l’exécution des tests lors d’un push
------
- Créer une branche et ajouter une erreur dans le test ou le code
- Configurer votre repository pour que les merge vers la branche main ne soient pas possible si le
workflow lève une erreur


Exercice 3:

Créer un projet react simple et ajouter vitest au projet pour lancer des tests sur un composant
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
A partir d’un composant simple comme le suivant :
import React from "react"
export default function App() {
return (
<div className="container">
<h2 style={{ color: "green" }}>Hello world</h2>
</div>
)
}
Exécuter le test suivant

import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../src/App.jsx"
import { describe, it, expect, beforeAll, beforeEach } from 'vitest'

it("affiche Hello world", () => {
render(<App />)
expect(screen.getByText("Hello world")).toBeInTheDocument()
})