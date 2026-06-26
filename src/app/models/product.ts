export interface Product {
  id: number;
  name: string;
  description: string;
  soldPrice: number;
  regularPrice: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt?: Date; // Le ? = optionnel
  categories: string[];
}
