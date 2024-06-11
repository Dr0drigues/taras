import {Component} from '@angular/core';
import {StepComponent} from '../../../components/step/step.component';
import {Step} from '../../../models/sequence.model';

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
export class RestoNaraComponent {
  step: Step = {
    index: 101,
    name: 'Resto Nara',
    sequence: {
      images: [
        {
          id: 'resto-nara-00',
          file: 'sequences/resto/nara/1.png',
        },
        {
          id: 'resto-nara-01',
          file: 'sequences/resto/nara/2.png',
        },
        {
          id: 'resto-nara-03',
          file: 'sequences/resto/nara/3.png',
          nextSequence: '/ending-gay'
        }
      ],
      music: {
        file: 'sequences/resto/jazz.mp3',
        name: 'resto'
      }
    }
  }
}
