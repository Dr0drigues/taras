import {Component} from '@angular/core';
import {StepComponent} from '../../components/step/step.component';
import {Step} from '../../models/sequence.model';

@Component({
  selector: 'tn-resto',
  standalone: true,
  imports: [
    StepComponent
  ],
  template: `
    <tn-step [step]="step"></tn-step>
  `
})
export class RestoComponent {
  step: Step = {
    index: 100,
    name: 'Resto',
    sequence: {
      images: [
        {
          id: 'resto-00',
          file: 'sequences/resto/1.png',
          choices: [
            {
              id: 'resto-00',
              buttonLabel: 'Theo',
              nextSequence: 'resto-theo'
            },
            {
              id: 'resto-01',
              buttonLabel: 'Nara',
              nextSequence: 'resto-nara'
            },
            {
              id: 'resto-02',
              buttonLabel: 'Personne',
              nextSequence: 'resto-noone'
            }
          ]
        }
      ],
      music: {
        file: 'sequences/resto/jazz.mp3',
        name: 'resto'
      }
    }
  }
}
