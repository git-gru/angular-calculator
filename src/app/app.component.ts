import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  leftOperandForm = new FormControl('0');
  rightOperandForm = new FormControl('0');

  result = '0';

  calculator(type: string): void {
    let leftOperand = Number(this.leftOperandForm.value);
    let rightOperand = Number(this.rightOperandForm.value);

    switch(type) {
      case 'add':
        this.result = (leftOperand + rightOperand).toString();
        break;
      case 'sub':
        this.result = (leftOperand - rightOperand).toString();
        break;
      case 'mul':
        this.result = (leftOperand * rightOperand).toString();
        break;
      case 'div':
        this.result = (leftOperand / rightOperand).toString();
        break;
      default:
        break;
    }
  }
}
