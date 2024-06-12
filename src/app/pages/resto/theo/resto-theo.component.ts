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
export class RestoTheoComponent {
  step: Step = {
    index: 101,
    name: 'Resto',
    sequence: {
      images: [
        {
          id: 'resto-theo-00',
          file: 'sequences/resto/theo/1.png',
        },
        {
          id: 'resto-theo-01',
          file: 'sequences/resto/theo/2.png',
        },
        {
          id: 'resto-theo-03',
          file: 'sequences/resto/theo/3.png',
          nextSequence: '/ending-cat'
        }
      ],
      music: {
        file: 'sequences/resto/jazz.mp3',
        name: 'resto'
      }
    }
  }
}
