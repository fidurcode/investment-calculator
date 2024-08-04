import {Component, inject} from '@angular/core';
import {InvestmentCalculatorService} from "../calculator/services/investment-calculator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'investment-calculator';
  investmentCalculatorService: InvestmentCalculatorService = inject(InvestmentCalculatorService);
}