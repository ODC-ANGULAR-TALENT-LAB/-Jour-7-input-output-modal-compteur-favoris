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

  // Reçoit l'événement propagé depuis le modal et incrémente le compteur
  onFavoriteAdded(product: Product): void {
    this.favoritesCount.update((count) => count + 1);
  }
}
