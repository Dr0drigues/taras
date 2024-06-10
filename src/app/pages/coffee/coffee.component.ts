import {Component} from '@angular/core';
import {StepComponent} from '../../components/step/step.component';
import {Step} from '../../models/sequence.model';

@Component({
  selector: 'tn-coffee',
  template: `
    <tn-step [step]="step"/>
  `,
  imports: [
    StepComponent
  ],
  standalone: true
})
export class CoffeeComponent {
  step: Step = {
    name: 'Coffee',
    index: 0,
    sequence: {
      images: [
        {
          file: 'sequences/coffee/img/1.png',
          soundEffect: 'sequences/coffee/sound/copains_copines.m4a'
        }, {
          file: 'sequences/coffee/img/2.png'
        }, {
          file: 'sequences/coffee/img/3.png'
        },
        {
          files: [
            'sequences/coffee/img/4.png',
            'sequences/coffee/img/5.png'
          ],
          duration: 1000
        },
        {
          file: 'sequences/coffee/img/choice.png'
        }
      ],
      music: {
        name: 'Blues',
        file: 'sequences/coffee/sound/blues.mp3'
      }
    },
    choices: []
  };
}
