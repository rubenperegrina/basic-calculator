import { Component } from '@angular/core';
import { CalculatorComponent } from '@app/components/calculator/calculator.component';

@Component({
  selector: 'bc-root',
  standalone: true,
  imports: [CalculatorComponent],
  template: `<bc-calculator/>`
})
export class AppComponent {
}
