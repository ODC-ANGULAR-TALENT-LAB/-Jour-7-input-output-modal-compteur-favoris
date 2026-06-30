import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Container } from './components/container/container';
import { Footer } from './components/footer/footer';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [Header, Container, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('shop-app');

  // Compteur global de favoris, partagé avec le Header via input
  protected readonly favoritesCount = signal(0);

  // Moyenne globale des notes (sur 5), partagée avec le Header via input
  protected readonly averageRating = signal(0);

  // Reçoit l'événement propagé depuis le modal et incrémente le compteur
  onFavoriteAdded(product: Product): void {
    this.favoritesCount.update((count) => count + 1);
  }

  // Reçoit le retrait propagé depuis le modal et décrémente le compteur
  onFavoriteRemoved(product: Product): void {
    this.favoritesCount.update((count) => Math.max(0, count - 1));
  }

  // Reçoit la nouvelle moyenne des notes propagée depuis la liste
  onAverageRatingChanged(average: number): void {
    this.averageRating.set(average);
  }
}
