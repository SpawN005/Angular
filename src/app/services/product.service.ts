import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  Products: Produit[] = [
    { id: 1, code: 127, libelle: 'PC', prixunitaire: 2000, tauxTva: 10 },
    { id: 2, code: 128, libelle: 'TV', prixunitaire: 1000, tauxTva: 20 },
    { id: 3, code: 128, libelle: 'Table', prixunitaire: 200, tauxTva: 30 },
    { id: 4, code: 129, libelle: 'Table', prixunitaire: 200, tauxTva: 30 },
  ];

  constructor() {}
  getAllProducts(): Produit[] {
    return this.Products;
  }
  getNbProductsByLibelle(libelle: string): number {
    return this.Products.filter((p) => p.libelle === libelle).length;
  }
}
