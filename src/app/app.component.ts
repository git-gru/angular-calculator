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

  add(): void {
  }

  sub(): void {
  }

  mul(): void {
  }

  div(): void {
  }
}
