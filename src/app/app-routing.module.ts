import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { CalcRoutingModule } from './calculator/calc-routing.module';
import { SettingsRoutingModule } from './settings/settings-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
    HomeRoutingModule,
    CalcRoutingModule,
    SettingsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
