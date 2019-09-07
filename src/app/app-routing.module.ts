import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsUserGuard } from './core/guards/cons-user.guard';
import { PublicUserGuard } from './core/guards/public-user.guard';


const routes: Routes = [
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then(mod => mod.HotelsModule),
    canLoad: [PublicUserGuard],
    canActivate: [PublicUserGuard],
    canActivateChild: [PublicUserGuard],
  },
  {
    path: 'flights',
    loadChildren: () => import('./flights/flights.module').then(mod => mod.FlightsModule),
    canLoad: [PublicUserGuard],
    canActivate: [PublicUserGuard],
    canActivateChild: [PublicUserGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
    canLoad: [ConsUserGuard],
    canActivate: [ConsUserGuard],
    canActivateChild: [ConsUserGuard],
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    canLoad: [PublicUserGuard],
    canActivate: [PublicUserGuard],
    canActivateChild: [PublicUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
