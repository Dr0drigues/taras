import {Component} from '@angular/core';
import {StepComponent} from '../../../components/step/step.component';
import {Step} from '../../../models/sequence.model';

@Component({
  selector: 'tn-warzone',
  standalone: true,
  imports: [
    StepComponent
  ],
  template: `
    <tn-step [step]="step"></tn-step>`
})
export class WarzoneTryhardComponent {
  step: Step = {
    name: 'warzone-tryhard',
    index: 5,
    sequence: {
      images: [
        {
          id: 'warzone-tryhard-00',
          file: '/sequences/warzone/img/tryhard-1.png'
        },
        {
          id: 'warzone-tryhard-01',
          file: '/sequences/warzone/img/tryhard-2.png',
          nextSequence: '/ending-pls'
        },
      ],
      music: {
        name: 'epic',
        file: '/sequences/warzone/sound/epic.mp3'
      },
    }
  };
}
