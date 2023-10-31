import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', redirectTo: 'listFournisseur', pathMatch: 'full' },
  {
    path: 'listFournisseur',
    component: ListFournisseurComponent,
  },
  { path: 'listProduit', component: ListProduitsComponent },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
