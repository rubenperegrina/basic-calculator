import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorAction } from '@app/enums/calculator-action';

@Component({
  selector: 'bc-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  btn: (string | CalculatorAction)[] = [
    '7', '8', '9', CalculatorAction.Divide,
    '4', '5', '6', CalculatorAction.Multiply,
    '1', '2', '3', CalculatorAction.Subtract,
    '0', CalculatorAction.Decimal, CalculatorAction.Calculate, CalculatorAction.Add
  ];

  btnUp: string[] = [CalculatorAction.ClearAll, CalculatorAction.ClearLast];
  valueInput = '';

  onButtonClick(param: string | number) {
    switch (param) {
      case CalculatorAction.ClearAll:
        this.clearAll();
        break;
      case CalculatorAction.ClearLast:
        this.clearLastCharacter();
        break;
      case CalculatorAction.Calculate:
        this.calculateResult();
        break;
      default:
        this.addToInput(param.toString());
        break;
    }
  }

  calculateResult() {
    try {
      this.valueInput = eval(this.valueInput).toString();
    } catch (error) {
      this.valueInput = 'An error has ocurred';
    }
  }

  clearAll() {
    this.valueInput = '';
  }

  clearLastCharacter() {
    this.valueInput = this.valueInput.slice(0, -1);
  }

  addToInput(input: string) {
    if (input === CalculatorAction.Multiply) {
      this.valueInput += '*';
    } else {
      this.valueInput += input.toString();
    }
  }

  getButtonClass(action: string | number) {
    return {
      'buttonUp-calculator-reset': action === CalculatorAction.ClearAll || action === CalculatorAction.ClearLast,
      'buttonUp-calculator': typeof action === 'string' && ![CalculatorAction.ClearAll, CalculatorAction.ClearLast].includes(action as CalculatorAction),
      'button-numeric': typeof action === 'string' && !isNaN(Number(action))
    };
  }
}
