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
    path: 'coffee/bad',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/coffee/bad/coffee-bad.component')).CoffeeBadComponent
  },
  {
    path: 'sms',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/sms/sms.component')).SmsComponent
  },
  {
    path: 'letter',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/letter/letter.component')).LetterComponent
  },
  {
    path: 'warzone',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/warzone/warzone.component')).WarzoneComponent
  },
  {
    path: 'warzone-tryhard',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/warzone/tryhard/warzone-tryhard.component')).WarzoneTryhardComponent
  },
  {
    path: 'warzone-break',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/warzone/break/warzone-break.component')).WarzoneBreakComponent
  },
  {
    path: 'potmaking-first',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/potmaking/potmaking-first.component')).PotmakingFirstComponent
  },
  {
    path: 'potmaking-second',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/potmaking/potmaking-second.component')).PotmakingSecondComponent
  },
  {
    path: 'resto',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/resto/resto.component')).RestoComponent
  },
  {
    path: 'resto-theo',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/resto/theo/resto-theo.component')).RestoTheoComponent
  },
  {
    path: 'resto-nara',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/resto/nara/resto-nara.component')).RestoNaraComponent
  },
  {
    path: 'resto-noone',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/resto/noone/resto-noone.component')).RestoNooneComponent
  },
  {
    path: 'ending-gay',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/ending/gay/gay.ending')).GayEndingComponent
  },
  {
    path: 'ending-pls',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/ending/pls/pls.ending')).PLSEndingComponent
  },
  {
    path: 'ending-cat',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/ending/cat/cat.ending')).CatEndingComponent
  },
  {
    path: 'ending-mail',
    pathMatch: 'full',
    loadComponent: async () => (await import('./pages/ending/envelope/envelope.component')).EnvelopeComponent
  },
];
