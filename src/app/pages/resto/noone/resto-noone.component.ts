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
export class RestoNooneComponent {
  step: Step = {
    index: 103,
    name: 'Resto',
    sequence: {
      images: [
        {
          id: 'resto-noone-00',
          files: [
            'sequences/resto/noone/1.png',
            'sequences/resto/noone/2.png',
            'sequences/resto/noone/3.png',
            'sequences/resto/noone/4.png'
          ],
          duration: 150,
        },{
          id: 'resto-noone-001',
          files: [
            'sequences/resto/noone/5.png',
            'sequences/resto/noone/6.png',
          ],
          duration: 110,
          nextSequence: 'ending-mail'
        },
      ],
      music: {
        file: 'sequences/resto/noone/run.mp3',
        name: 'resto'
      }
    }
  }
}
