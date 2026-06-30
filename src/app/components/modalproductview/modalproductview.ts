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

  // INPUT : indique si ce produit est déjà dans les favoris
  readonly isFavorite = input(false);

  // OUTPUTS : événements remontés vers le parent (enfant -> parent)
  readonly close = output<void>();
  readonly favoriteAdded = output<Product>();
  readonly favoriteRemoved = output<Product>();
  readonly rate = output<number>();

  // 5 étoiles pour le template (1, 2, 3, 4, 5)
  protected readonly stars = [1, 2, 3, 4, 5];

  // Clic sur une étoile -> on remonte la note au parent
  onRate(value: number): void {
    this.rate.emit(value);
  }

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

  // Retrait des favoris : émet le produit courant vers le parent
  onRemoveFromFavorites(): void {
    this.favoriteRemoved.emit(this.product());
  }
}
