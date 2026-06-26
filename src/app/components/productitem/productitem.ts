import { Component, input } from '@angular/core';
import { CurrencyPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productitem',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, JsonPipe, UpperCasePipe],
  templateUrl: './productitem.html',
  styleUrls: ['./productitem.css'],
})
export class Productitem {
  readonly product = input.required<Product>();

  formatPrice(price: number): string {
    return price + ' FCFA';
  }
}
