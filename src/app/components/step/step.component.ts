import {NgForOf} from '@angular/common';
import { Component, Input } from '@angular/core';
import {Step} from '../../models/sequence.model';
import {ChoiceComponent} from '../choice/choice.component';
import {SequenceComponent} from '../sequence/sequence.component';

@Component({
  selector: 'tn-step',
  template: `
    <tn-sequence [sequence]="step.sequence"></tn-sequence>
    @for (choice of step.choices; track choice) {
      <tn-choice [choice]="choice"></tn-choice>
    }
  `,
  standalone: true,
  imports: [
    SequenceComponent,
    ChoiceComponent,
    NgForOf
  ]
})
export class StepComponent {
  @Input() step: Step;
}
