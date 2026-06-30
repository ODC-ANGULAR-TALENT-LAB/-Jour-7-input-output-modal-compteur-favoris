import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productlist } from '../productlist/productlist';
import { Product } from '../../models/product';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet, Productlist],
  templateUrl: './container.html',
  styleUrls: ['./container.css'],
})
export class Container {
  // Output : retransmet l'ajout aux favoris vers App
  readonly favoriteAdded = output<Product>();

  onFavoriteAdded(product: Product): void {
    this.favoriteAdded.emit(product);
  }
}
