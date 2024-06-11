import {Component} from '@angular/core';
import {StepComponent} from '../../../components/step/step.component';
import {Step} from '../../../models/sequence.model';

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
export class CoffeeBadComponent {
  step: Step = {
    name: 'Coffee Bad',
    index: 99,
    sequence: {
      images: [
        {
          id: 'coffee-bad-00',
          file: 'sequences/coffee/img/6a.png',
          nextSequence: '/ending-gay'
        }
      ],
      music: {
        name: 'Smooth',
        file: 'sequences/coffee/sound/blues.mp3'
      }
    }
  }
}
