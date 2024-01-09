import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRoutingModule } from './calc-routing.module';

import { CalculatorComponent } from './calc.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [CommonModule, SharedModule, CalcRoutingModule]
})
export class CalculatorModule {}
