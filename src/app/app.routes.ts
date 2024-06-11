import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/home/home.component')).HomeComponent
  },
  {
    path: 'wait',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/wait/wait.component')).WaitComponent
  },
  {
    path: 'coffee',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/coffee/coffee.component')).CoffeeComponent
  },
  {
    path: 'coffee/sequel',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/coffee/sequel/coffee-sequel.component')).CoffeeSequelComponent
  },
  {
    path: 'sms',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/sms/sms.component')).SmsComponent
  },
  {
    path: 'ending-gay',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/ending/gay/gay.ending')).GayEndingComponent
  }
];
