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
export class LetterComponent {
  step: Step = {
    name: 'Letter',
    index: 4,
    sequence: {
      images: [
        {
          id: 'letter-00',
          file: 'sequences/letter/img/1.png',
        },
        {
          id: 'letter-01',
          file: 'sequences/letter/img/2.png',
        },
        {
          id: 'letter-02',
          file: 'sequences/letter/img/3.png',
        },
        {
          id: 'letter-03',
          file: 'sequences/letter/img/4.png',
          nextSequence: '/ending-pls'
        }
      ],
      music: {
        name: 'Je ne tai jamais autant aimer',
        file: 'sequences/letter/sound/jamais_autant_aimer.wav'
      }
    }
  }
}
