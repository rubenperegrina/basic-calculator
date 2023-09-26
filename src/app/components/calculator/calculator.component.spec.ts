import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { CommonModule } from '@angular/common';
import { CalculatorAction } from '@app/enums/calculator-action';

describe('CalculatorComponent', () => {
  let fixture: ComponentFixture<CalculatorComponent>;
  let app: CalculatorComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
    });

    fixture = TestBed.createComponent(CalculatorComponent);
    app = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(app).toBeTruthy();
  });

  it('should clear all', () => {
    app.valueInput = '123';
    app.onButtonClick(CalculatorAction.ClearAll);
    expect(app.valueInput).toEqual('');
  });

  it('should clear last character', () => {
    app.valueInput = '123';
    app.onButtonClick(CalculatorAction.ClearLast);
    expect(app.valueInput).toEqual('12');
  });

  it('should add to input', () => {
    app.onButtonClick('5');
    app.onButtonClick(CalculatorAction.Add);
    app.onButtonClick('3');
    expect(app.valueInput).toEqual('5+3');
  });

  it('should handle multiplication operator correctly', () => {
    app.onButtonClick(CalculatorAction.Multiply);
    expect(app.valueInput).toEqual('*');
  });

  it('should calculate result', () => {
    app.valueInput = '2+2';
    app.onButtonClick(CalculatorAction.Calculate);
    expect(app.valueInput).toEqual('4');
  });

  it('should handle subtraction operator correctly', () => {
    app.onButtonClick('7');
    app.onButtonClick(CalculatorAction.Subtract);
    app.onButtonClick('4');
    app.onButtonClick(CalculatorAction.Calculate);
    expect(app.valueInput).toEqual('3');
  });
  
  it('should handle division operator correctly', () => {
    app.onButtonClick('9');
    app.onButtonClick(CalculatorAction.Divide);
    app.onButtonClick('3');
    app.onButtonClick(CalculatorAction.Calculate);
    expect(app.valueInput).toEqual('3');
  });
  
  it('should handle decimal point input correctly', () => {
    app.onButtonClick('5');
    app.onButtonClick(CalculatorAction.Decimal);
    app.onButtonClick('2');
    expect(app.valueInput).toEqual('5.2');
  });
  
  it('should handle ClearLast when value is empty', () => {
    app.valueInput = '';
    app.onButtonClick(CalculatorAction.ClearLast);
    expect(app.valueInput).toEqual('');
  });
  
  it('should handle ClearAll when value is empty', () => {
    app.valueInput = '';
    app.onButtonClick(CalculatorAction.ClearAll);
    expect(app.valueInput).toEqual('');
  });
});
