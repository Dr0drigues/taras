import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/login/login.component')).LoginComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/home/home.component')).HomeComponent,
  },
  {
    path: 'wait',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/wait/wait.component')).WaitComponent,
  },
  {
    path: 'coffee',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/coffee/coffee.component')).CoffeeComponent,
  }
];
