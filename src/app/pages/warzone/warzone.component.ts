import {Component} from '@angular/core';
import {StepComponent} from '../../components/step/step.component';
import {Step} from '../../models/sequence.model';

@Component({
  selector: 'tn-warzone',
  standalone: true,
  imports: [
    StepComponent
  ],
  template: `
    <tn-step [step]="step"></tn-step>`
})
export class WarzoneComponent {
  step: Step = {
    name: 'warzone',
    index: 3,
    sequence: {
      images: [
        {
          id: 'warzone-00',
          file: '/sequences/warzone/img/1.png'
        },
        {
          id: 'warzone-01',
          file: '/sequences/warzone/img/2.png'
        },
        {
          id: 'warzone-02',
          file: '/sequences/warzone/img/3.png'
        },
        {
          id: 'warzone-choice',
          file: '/sequences/warzone/img/choice.png',
          choices: [
            {
              id: 'warzone-choice-1',
              buttonLabel: 'Et si je tentais de TryHard pour impressionner ?',
              nextSequence: 'warzone-tryhard'
            },
            {
              id: 'warzone-choice-2',
              buttonLabel: 'Une petite pause devrait faire du bien',
              nextSequence: 'warzone-break'
            },
          ]
        }
      ],
      music: {
        name: 'epic',
        file: '/sequences/warzone/sound/epic.mp3'
      },
    }
  };
}
