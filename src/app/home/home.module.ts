import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, MatButtonModule, MatCheckboxModule]
})
export class HomeModule {}
