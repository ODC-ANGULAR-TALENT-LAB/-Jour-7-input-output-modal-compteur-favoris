import { Component, signal } from '@angular/core';
import { Productitem } from '../productitem/productitem';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [Productitem],
  templateUrl: './productlist.html',
  styleUrls: ['./productlist.css'],
})
export class Productlist {
  protected readonly products = signal<Product[]>([
    {
      name: 'Produit 1',
      image: 'assets/images/Products/10138675087.jfif',
      price: '5000 Fcfa',
    },
    {
      name: 'Produit 2',
      image: 'assets/images/Products/10149427496.jfif',
      price: '6000 Fcfa',
    },
    {
      name: 'Produit 3',
      image: 'assets/images/Products/103564.881_1.jpg',
      price: '7500 Fcfa',
    },
    {
      name: 'Produit 4',
      image: 'assets/images/Products/331R2JW_A09_1.webp',
      price: '8000 Fcfa',
    },
    {
      name: 'Produit 5',
      image: 'assets/images/Products/71Pv5qp5KFL._AC_UY1000_.jpg',
      price: '9500 Fcfa',
    },
    {
      name: 'Produit 6',
      image: 'assets/images/Products/chemise-hommes-uni-en-slim-a-manches-longues-coupe.webp',
      price: '10000 Fcfa',
    },
    {
      name: 'Produit 7',
      image: 'assets/images/Products/dfe55277-28f5-4fcb-a2e8-729b258c91da.jpg',
      price: '11500 Fcfa',
    },
    {
      name: 'Produit 8',
      image: 'assets/images/Products/images (1).jfif',
      price: '13000 Fcfa',
    },
    {
      name: 'Produit 9',
      image: 'assets/images/Products/images (2).jfif',
      price: '14500 Fcfa',
    },
    {
      name: 'Produit 10',
      image: 'assets/images/Products/images (3).jfif',
      price: '15000 Fcfa',
    },
    {
      name: 'Produit 11',
      image: 'assets/images/Products/images (4).jfif',
      price: '16500 Fcfa',
    },
    {
      name: 'Produit 12',
      image: 'assets/images/Products/images (5).jfif',
      price: '17000 Fcfa',
    },
    {
      name: 'Produit 13',
      image: 'assets/images/Products/images (6).jfif',
      price: '18500 Fcfa',
    },
    {
      name: 'Produit 14',
      image: 'assets/images/Products/images (7).jfif',
      price: '19000 Fcfa',
    },
    {
      name: 'Produit 15',
      image: 'assets/images/Products/images (8).jfif',
      price: '20500 Fcfa',
    },
    {
      name: 'Produit 16',
      image: 'assets/images/Products/images (9).jfif',
      price: '21500 Fcfa',
    },
    {
      name: 'Produit 17',
      image: 'assets/images/Products/images.jfif',
      price: '22500 Fcfa',
    },
    {
      name: 'Produit 18',
      image: 'assets/images/Products/it2832-1.png',
      price: '24000 Fcfa',
    },
    {
      name: 'Produit 19',
      image: 'assets/images/Products/it786-3.png',
      price: '25500 Fcfa',
    },
    {
      name: 'Produit 20',
      image: 'assets/images/Products/product-1.jpg',
      price: '27000 Fcfa',
    },
    {
      name: 'Produit 21',
      image: 'assets/images/Products/product-2.jpeg',
      price: '28500 Fcfa',
    },
    {
      name: 'Produit 22',
      image: 'assets/images/Products/shooz-de-luxe-780x450.jpg',
      price: '30000 Fcfa',
    },
    {
      name: 'Produit 23',
      image: 'assets/images/Products/veste-a-manches-cape-avec-ceinture.jpg',
      price: '32000 Fcfa',
    },
  ]);
}
