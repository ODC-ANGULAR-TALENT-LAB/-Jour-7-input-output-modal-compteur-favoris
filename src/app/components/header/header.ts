import { Component, input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, DecimalPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly isMenuOpen = signal(false);
  protected readonly cartCount = signal(0);

  // Input : compteur de favoris reçu depuis App (par défaut 0)
  readonly favoritesCount = input(0);

  // Input : moyenne des notes (sur 5) reçue depuis App (par défaut 0)
  readonly averageRating = input(0);

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
