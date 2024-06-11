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
export class WarzoneBreakComponent {
  step: Step = {
    name: 'Warzone Break',
    index: 39,
    sequence: {
      images: [
        {
          id: 'warzone-break-00',
          file: 'sequences/warzone/img/break-1.png',
        },
        {
          id: 'warzone-break-choice-00',
          file: 'sequences/warzone/img/break-choice.png',
          choices: [
            {
              id: 'warzone-break-choice-1',
              buttonLabel: 'Réaliser un atelier poterie',
              nextSequence: 'potmaking-first'
            },
            {
              id: 'warzone-break-choice-2',
              buttonLabel: 'Organiser un restaurant pour se remplir le ventre',
              nextSequence: 'resto'
            }
          ]
        }
      ],
      music: {
        name: 'Epic',
        file: 'sequences/warzone/sound/epic.mp3'
      }
    }
  }
}
