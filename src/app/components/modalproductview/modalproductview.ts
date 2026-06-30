import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-modalproductview',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './modalproductview.html',
  styleUrls: ['./modalproductview.css'],
})
export class Modalproductview {
  // INPUT : le produit à afficher (parent -> enfant)
  readonly product = input.required<Product>();

  // OUTPUTS : événements remontés vers le parent (enfant -> parent)
  readonly close = output<void>();
  readonly favoriteAdded = output<Product>();

  // Fermeture du modal
  onCloseClick(): void {
    this.close.emit();
  }

  // Fermeture en cliquant sur l'overlay sombre (bonus J8)
  onOverlayClick(): void {
    this.close.emit();
  }

  // Ajout aux favoris : émet le produit courant vers le parent
  onAddToFavorites(): void {
    this.favoriteAdded.emit(this.product());
  }
}
