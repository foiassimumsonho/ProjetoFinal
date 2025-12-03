import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FaleComponent } from './pages/fale/fale.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'fale', component: FaleComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

{path: 'dashboard',
  loadComponent: () =>
    import('./pages/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
}



];
