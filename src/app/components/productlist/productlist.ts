import { Component, output, signal } from '@angular/core';
import { Productitem } from '../productitem/productitem';
import { Modalproductview } from '../modalproductview/modalproductview';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [Productitem, Modalproductview],
  templateUrl: './productlist.html',
  styleUrls: ['./productlist.css'],
})
export class Productlist {
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Tenue Toghu brodée',
      description: 'Tunique royale en velours brodé, art Bamiléké du Nord-Ouest',
      soldPrice: 45000,
      regularPrice: 60000,
      imageUrl: 'assets/images/Products/artisanat/toghu.jpg',
      createdAt: new Date('2026-01-15'),
      categories: ['vêtement', 'traditionnel', 'cérémonie'],
    },
    {
      id: 2,
      name: 'Étoffe Toghu au mètre',
      description: 'Tissu Toghu en velours noir brodé de motifs colorés',
      soldPrice: 12000,
      regularPrice: 16000,
      imageUrl: 'assets/images/Products/artisanat/toghu-cloth.jpg',
      createdAt: new Date('2026-02-03'),
      categories: ['textile', 'traditionnel'],
    },
    {
      id: 3,
      name: 'Tissu Ndop indigo',
      description: 'Étoffe royale teinte à l’indigo, motifs Bamoun',
      soldPrice: 20000,
      regularPrice: 28000,
      imageUrl: 'assets/images/Products/artisanat/boubou-ndop.jpg',
      createdAt: new Date('2026-02-20'),
      categories: ['textile', 'traditionnel'],
    },
    {
      id: 4,
      name: 'Bonnet de prestige Bamoun',
      description: 'Coiffe traditionnelle tissée à la main, chefferie de l’Ouest',
      soldPrice: 15000,
      regularPrice: 22000,
      imageUrl: 'assets/images/Products/artisanat/bonnet-tisse.jpg',
      createdAt: new Date('2026-03-08'),
      categories: ['accessoire', 'coiffe', 'traditionnel'],
    },
    {
      id: 5,
      name: 'Sac perlé Bamiléké',
      description: 'Sac de cérémonie brodé de perles et de cauris',
      soldPrice: 18000,
      regularPrice: 25000,
      imageUrl: 'assets/images/Products/artisanat/sac-perle-bamileke.jpg',
      createdAt: new Date('2026-03-25'),
      categories: ['accessoire', 'perles'],
    },
    {
      id: 6,
      name: 'Collier de perles Graffi',
      description: 'Collier en perles chevron des Grassfields, fait main',
      soldPrice: 25000,
      regularPrice: 32000,
      imageUrl: 'assets/images/Products/artisanat/collier-graffi.jpg',
      createdAt: new Date('2026-04-12'),
      categories: ['accessoire', 'bijou', 'perles'],
    },
    {
      id: 7,
      name: 'Bracelet en perles artisanal',
      description: 'Bracelet en perles de bois sculptées, fabrication locale',
      soldPrice: 5000,
      regularPrice: 8000,
      imageUrl: 'assets/images/Products/artisanat/bracelet-tresse.jpg',
      createdAt: new Date('2026-05-02'),
      categories: ['accessoire', 'bijou'],
    },
    {
      id: 8,
      name: 'Coiffe perlée de chefferie',
      description: 'Chapeau royal Bamoun perlé à motif d’éléphant et cauris',
      soldPrice: 28000,
      regularPrice: 38000,
      imageUrl: 'assets/images/Products/artisanat/coiffe-perlee-bamoun.jpg',
      createdAt: new Date('2026-05-20'),
      categories: ['accessoire', 'coiffe', 'perles'],
    },
  ]);

  // État du modal : afficher ou non + quel produit afficher
  protected readonly isDisplayModal = signal(false);
  protected readonly modalProduct = signal<Product | undefined>(undefined);

  // Output : retransmet l'ajout aux favoris vers le parent (Container)
  readonly favoriteAdded = output<Product>();

  // Un produit a été cliqué -> on ouvre le modal avec ses données
  onDisplayProductViewModal(product: Product): void {
    this.modalProduct.set(product);
    this.isDisplayModal.set(true);
  }

  // Le modal demande à être fermé -> on réinitialise l'état
  onCloseModal(): void {
    this.isDisplayModal.set(false);
    this.modalProduct.set(undefined);
  }

  // Le modal signale un ajout aux favoris -> on le propage vers le haut
  onFavoriteAdded(product: Product): void {
    this.favoriteAdded.emit(product);
  }
}
