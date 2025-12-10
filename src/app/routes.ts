import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FaleComponent } from './pages/fale/fale.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardDetalhesComponent } from './pages/dashboarddetalhes/dashboarddetalhes.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'fale', component: FaleComponent },
  { path: 'dashboarddetalhes', component: DashboardDetalhesComponent },
 { 
    path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] 
  },
 
  { path: '**', redirectTo: 'home' }
];