import { Routes } from '@angular/router';

export const routes: Routes = [
  // redireciona '' para home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // rotas principais
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'sobre', loadComponent: () => import('./sobre/sobre.component').then(m => m.SobreComponent) },
  { path: 'fale', loadComponent: () => import('./fale/fale.component').then(m => m.FaleComponent) }
];
