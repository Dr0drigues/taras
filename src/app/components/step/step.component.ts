import {CommonModule} from '@angular/common';
import { Component, Input } from '@angular/core';
import {Step} from '../../models/sequence.model';
import {SequenceComponent} from '../sequence/sequence.component';

@Component({
  selector: 'tn-step',
  template: `
    <tn-sequence [sequence]="step.sequence"></tn-sequence>
  `,
  standalone: true,
  imports: [
    SequenceComponent,
    CommonModule
  ]
})
export class StepComponent {
  @Input() step: Step;
}
