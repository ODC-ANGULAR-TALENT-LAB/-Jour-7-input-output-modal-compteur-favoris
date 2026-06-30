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

  // Output : retransmet le retrait des favoris vers App
  readonly favoriteRemoved = output<Product>();

  // Output : retransmet la moyenne des notes vers App
  readonly averageRatingChanged = output<number>();

  onFavoriteAdded(product: Product): void {
    this.favoriteAdded.emit(product);
  }

  onFavoriteRemoved(product: Product): void {
    this.favoriteRemoved.emit(product);
  }

  onAverageRatingChanged(average: number): void {
    this.averageRatingChanged.emit(average);
  }
}
