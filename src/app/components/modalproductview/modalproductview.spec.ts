import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalproductview } from './modalproductview';
import { Product } from '../../models/product';

describe('Modalproductview', () => {
  let component: Modalproductview;
  let fixture: ComponentFixture<Modalproductview>;

  const product: Product = {
    id: 1,
    name: 'Tenue Toghu brodée',
    description: 'Tunique royale en velours brodé',
    soldPrice: 45000,
    regularPrice: 60000,
    imageUrl: 'assets/images/Products/artisanat/toghu.jpg',
    createdAt: new Date('2026-01-15'),
    categories: ['vêtement', 'traditionnel'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modalproductview],
    }).compileComponents();

    fixture = TestBed.createComponent(Modalproductview);
    fixture.componentRef.setInput('product', product);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close', () => {
    let closed = false;
    component.close.subscribe(() => (closed = true));
    component.onCloseClick();
    expect(closed).toBe(true);
  });

  it('should emit the product on favorite', () => {
    let emitted: Product | undefined;
    component.favoriteAdded.subscribe((p) => (emitted = p));
    component.onAddToFavorites();
    expect(emitted).toEqual(product);
  });
});
