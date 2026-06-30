# Shop App

Application de boutique en ligne développée avec **Angular 22** dans le cadre des TP de l'ODC Angular Talent Lab (Jours 5 à 7).

## Aperçu

L'application présente une vitrine de produits avec :

- un **header** vert collant (sticky) restant visible au défilement, avec la marque, la navigation (Home, Products, Blog, Contact) et un **compteur de favoris** ;
- un **container** central blanc affichant un message d'accueil et la liste des produits ;
- un **footer** vert.

Les produits s'affichent sous forme de cartes disposées horizontalement et passant automatiquement à la ligne suivante lorsque la rangée est pleine. L'interface est **responsive** (ordinateur, tablette, mobile).

Au clic sur un produit, un **modal** s'ouvre avec son détail. Un bouton « Ajouter aux favoris » incrémente le compteur affiché dans le header.

## Communication entre composants (Jour 7)

L'application illustre la communication `input()` / `output()` de l'API Signals d'Angular 22, propagée sur plusieurs niveaux :

```
Productitem  --(output: displayProductViewModal)-->  Productlist
Productlist  --(input: product)-->                   Modalproductview
Modalproductview --(output: favoriteAdded)-->  Productlist --> Container --> App
App  --(input: favoritesCount)-->                    Header
```

- `input()` : transmet une donnée du parent vers l'enfant (`[...]`).
- `output()` : remonte un événement de l'enfant vers le parent (`(...)`).
- `Productlist` orchestre l'ouverture/fermeture du modal via deux signals (`isDisplayModal`, `modalProduct`).
- `App` maintient le signal partagé `favoritesCount`.

## Architecture des composants

```
src/app/
├── components/
│   ├── header/             # En-tête (marque + navigation + compteur de favoris)
│   ├── container/          # Zone centrale (titre + liste des produits)
│   ├── productlist/        # Liste des produits + orchestration du modal
│   ├── productitem/        # Carte d'un produit (clic = ouverture du modal)
│   ├── modalproductview/   # Modal de détail + bouton « Ajouter aux favoris »
│   └── footer/             # Pied de page
└── models/
    └── product.ts          # Interface Product
```

L'interface `Product` est définie dans `models/product.ts` et réutilisée par les composants.

## Prérequis

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- npm

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm start
```

L'application est disponible sur [http://localhost:4200](http://localhost:4200) et se recharge automatiquement à chaque modification.

## Build de production

```bash
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`.

## Ajouter un produit

1. Déposer l'image dans `src/assets/images/Products/`.
2. Ajouter une entrée dans le tableau `products` de `src/app/components/productlist/productlist.ts` :

```ts
{
  id: 9,
  name: 'Produit X',
  description: 'Description du produit',
  soldPrice: 12000,
  regularPrice: 16000,
  imageUrl: 'assets/images/Products/mon-image.jpg',
  createdAt: new Date('2026-06-30'),
  categories: ['accessoire'],
}
```

Le produit apparaîtra automatiquement dans la grille.
