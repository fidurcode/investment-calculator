import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorFormComponent } from './components/calculator-form/calculator-form.component';
import { CalculatorResultsComponent } from './components/calculator-results/calculator-results.component';
import {InvestmentCalculatorService} from "./services/investment-calculator.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CalculatorFormComponent,
    CalculatorResultsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CalculatorFormComponent,
    CalculatorResultsComponent
  ],
  providers: [
    InvestmentCalculatorService
  ]
})
export class CalculatorModule { }