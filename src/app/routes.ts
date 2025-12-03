// src/app/routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // "full" é obrigatório aqui
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'sobre', loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent) },
  { path: 'fale', loadComponent: () => import('./pages/fale/fale.component').then(m => m.FaleComponent) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' } // se quiser wildcard
];
