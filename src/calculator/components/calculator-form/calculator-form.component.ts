import {Component, inject} from '@angular/core';
import {InvestmentCalculatorService} from "../../services/investment-calculator.service";
import {Calculate} from "../../models/calculate.model";

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrl: './calculator-form.component.scss'
})
export class CalculatorFormComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;

  private investmentCalculatorService: InvestmentCalculatorService = inject(InvestmentCalculatorService);

  onSubmit(): void {
    const dataToCalculate: Calculate = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    };

    this.investmentCalculatorService.calculateInvestmentResults(dataToCalculate);
  }
}