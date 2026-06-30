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
  rating?: number; // Note sur 5 attribuée par l'utilisateur (0 = non noté)
}
