import {Component, inject} from '@angular/core';
import {InvestmentCalculatorService} from "../../services/investment-calculator.service";

@Component({
  selector: 'app-calculator-results',
  templateUrl: './calculator-results.component.html',
  styleUrl: './calculator-results.component.scss'
})
export class CalculatorResultsComponent {
  private investmentCalculatorService: InvestmentCalculatorService = inject(InvestmentCalculatorService);

  get results() {
    return this.investmentCalculatorService.resultsData;
  }
}
