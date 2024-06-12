import {Component} from '@angular/core';
import {StepComponent} from '../../components/step/step.component';
import {Step} from '../../models/sequence.model';

@Component({
  selector: 'tn-sms',
  template: `
    <tn-step [step]="step"></tn-step>
  `,
  imports: [
    StepComponent
  ],
  standalone: true
})
export class PotmakingFirstComponent {
  step: Step = {
    name: 'Potmaking First',
    index: 59,
    sequence: {
      images: [
        {
          id: 'potmaking-first-00',
          file: 'sequences/potmaking/img/1.png'
        },
        {
          id: 'potmaking-first-01',
          file: 'sequences/potmaking/img/2.png',
          nextSequence: '/potmaking-second'
        }
      ],
      music: {
        name: 'potmaking',
        file: 'sequences/potmaking/sound/potmaking.wav'
      }
    }
  }
}
