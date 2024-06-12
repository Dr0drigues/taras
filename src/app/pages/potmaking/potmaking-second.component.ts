import {Component} from '@angular/core';
import {StepComponent} from '../../components/step/step.component';
import {Step} from '../../models/sequence.model';
import {POTMAKING_ENDING_TEXT} from '../../models/utils/constants.utils';

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
export class PotmakingSecondComponent {
  step: Step = {
    name: 'Potmaking Second',
    index: 60,
    sequence: {
      images: [
        {
          id: 'potmaking-second-00',
          file: 'sequences/potmaking/img/3.png',
          text: POTMAKING_ENDING_TEXT,
          nextSequence: '/ending-gay'
        }
      ],
      music: {
        name: 'end potmaking',
        file: 'sequences/potmaking/sound/end_potmaking.wav'
      }
    }
  }
}
