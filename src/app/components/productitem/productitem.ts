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

  onProductClick(): void {
    this.displayProductViewModal.emit(this.product());
  }

  formatPrice(price: number): string {
    return price + ' FCFA';
  }
}
