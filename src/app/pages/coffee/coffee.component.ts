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
          id: 'coffee-00',
          file: 'sequences/coffee/img/1.png',
          soundEffect: 'sequences/coffee/sound/copains_copines.m4a'
        }, {
          id: 'coffee-01',
          file: 'sequences/coffee/img/2.png'
        }, {
          id: 'coffee-02',
          file: 'sequences/coffee/img/3.png'
        },
        {
          id: 'coffee-03',
          files: [
            'sequences/coffee/img/4.png',
            'sequences/coffee/img/5.png'
          ],
          duration: 250
        },
        {
          id: 'coffee-04',
          title: 'Théo voit au loin:',
          file: 'sequences/coffee/img/choice.png',
          choices: [
            {
              id: 'coffee-04-choice-00',
              buttonLabel: 'Les lèvres pulpeuses d\'un charmant jeune homme',
              nextSequence: 'ending/bad/coffee'
            },
            {
              id: 'coffee-04-choice-01',
              buttonLabel: 'La douce crinière de la femme qui accompagne Mr "Copain, copine"',
              nextSequence: 'coffee/sequel'
            }
          ]
        }
      ],
      music: {
        name: 'Blues',
        file: 'sequences/coffee/sound/blues.mp3'
      }
    }
  };
}
