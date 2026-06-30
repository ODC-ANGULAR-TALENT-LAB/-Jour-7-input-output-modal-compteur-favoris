import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productitem',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe],
  templateUrl: './productitem.html',
  styleUrls: ['./productitem.css'],
})
export class Productitem {
  readonly product = input.required<Product>();

  // Output : signale au parent qu'on a cliqué pour ouvrir le modal
  readonly displayProductViewModal = output<Product>();

  // Output : signale au parent la note (sur 5) attribuée au produit
  readonly rate = output<number>();

  // 5 étoiles pour le template (1, 2, 3, 4, 5)
  protected readonly stars = [1, 2, 3, 4, 5];

  onProductClick(): void {
    this.displayProductViewModal.emit(this.product());
  }

  // Clic sur une étoile -> on remonte la note au parent
  // stopPropagation pour ne pas ouvrir le modal en même temps
  onRate(value: number, event: Event): void {
    event.stopPropagation();
    this.rate.emit(value);
  }

  formatPrice(price: number): string {
    return price + ' FCFA';
  }
}
