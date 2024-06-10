import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Choice} from '../../models/sequence.model';

@Component({
  selector: 'tn-choice',
  template: `
    <button (click)="goToNextSequence()">{{ choice.buttonLabel }}</button>
  `,
  standalone: true
})
export class ChoiceComponent {
  @Input() choice: Choice;

  constructor(private router: Router) {}

  goToNextSequence() {
    // Assuming you have a route for each sequence
    this.router.navigate([this.choice.nextSequence]);
  }
}
