import { Component } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css'],
})
export class ListProduitsComponent {
  list: Produit[] = [
    {
      idProduit: 1,
      code: 'P147852P',
      libelle: 'Produit1',
      prixUnitaire: 12.5,
      tauxTVA: 0.02,
    },
    {
      idProduit: 2,
      code: 'P147552P',
      libelle: 'Produit1',
      prixUnitaire: 30,
      tauxTVA: 0.198,
    },
    {
      idProduit: 3,
      code: 'D14785CC',
      libelle: 'Produit1',
      prixUnitaire: 20,
      tauxTVA: 0.198,
    },
    {
      idProduit: 4,
      code: 'E147852P',
      libelle: 'Produit1',
      prixUnitaire: 50,
      tauxTVA: 0.198,
    },
    {
      idProduit: 5,
      code: 'F147852P',
      libelle: 'Produit1',
      prixUnitaire: 70,
      tauxTVA: 0.02,
    },
  ];
  c = false;
  AjusterTVA(index: number) {
    this.list[index].tauxTVA = 0.02;
    alert('TVA modifiée');
  }
}
