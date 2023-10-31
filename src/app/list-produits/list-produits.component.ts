import { Component } from '@angular/core';
import { Produit } from '../models/produit';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css'],
})
export class ListProduitsComponent {
  searchText!: String;
  ListProduct!: Produit[];

  c = false;
  constructor(private ps: ProductService) {}
  ngOnInit() {
    this.ListProduct = this.ps.getAllProducts();
  }
  AjusterTVA(index: number) {
    this.ListProduct[index].tauxTva = 0.02;
    alert('TVA modifiée');
  }
  Calculer(libelle: string) {
    alert(this.ps.getNbProductsByLibelle(libelle));
  }
}
