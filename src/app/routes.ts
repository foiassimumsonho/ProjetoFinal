import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FaleComponent } from './pages/fale/fale.component';
import { DashboardDetalhesComponent } from './pages/dashboarddetalhes/dashboarddetalhes.component';


export const routes: Routes = [
  {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'fale',
        component: FaleComponent,
    },
    {
        path: 'sobre',
        component: SobreComponent,
    },
     {
        path: 'dashboarddetalhes',
        component: DashboardDetalhesComponent,
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
