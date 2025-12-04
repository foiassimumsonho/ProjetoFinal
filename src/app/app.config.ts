import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'sobre', loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent) },
      { path: 'fale', loadComponent: () => import('./pages/fale/fale.component').then(m => m.FaleComponent) },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'dashboarddetalhes', loadComponent: () => import('./pages/dashboarddetalhes/dashboarddetalhes.component').then(m => m.DashboardDetalhesComponent) }

    ])
  ]
};
