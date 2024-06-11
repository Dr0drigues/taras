import {Component} from '@angular/core';
import {StepComponent} from '../../../components/step/step.component';
import {Step} from '../../../models/sequence.model';

@Component({
  selector: 'tn-coffee-sequel',
  template: `
    <tn-step [step]="step"></tn-step>
  `,
  standalone: true,
  imports: [
    StepComponent
  ]
})
export class CoffeeSequelComponent {
  step: Step = {
    index: 1,
    name: 'Coffee Sequel',
    sequence: {
      images: [
        {
          id: 'coffee-sequel-00',
          file: 'sequences/coffee/img/sequel/1.png',
        }, {
          id: 'coffee-sequel-01',
          file: 'sequences/coffee/img/sequel/2.png',
          choices: [
            {
              id: 'coffee-sequel-01-choice-00',
              buttonLabel: 'SMS',
              nextSequence: 'sms'
            },
            {
              id: 'coffee-sequel-01-choice-01',
              buttonLabel: 'Chat Warzone',
              nextSequence: 'warzone'
            },
            {
              id: 'coffee-sequel-01-choice-02',
              buttonLabel: 'Lettre',
              nextSequence: 'letter'
            }
          ]
        }
      ],
      music: {
        name: 'Blues',
        file: 'sequences/coffee/sound/blues.mp3'
      }
    }
  }
}
