import {Component} from '@angular/core';
import {StepComponent} from '../../components/step/step.component';
import {Step} from '../../models/sequence.model';

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
export class SmsComponent {
  step: Step = {
    name: 'SMS',
    index: 2,
    sequence: {
      images: [
        {
          id: 'sms-00',
          file: 'sequences/sms/img/1.png',
        }, {
          id: 'sms-01',
          file: 'sequences/sms/img/2.png'
        }, {
          id: 'sms-02',
          file: 'sequences/sms/img/3.jpg'
        },
        {
          id: 'sms-03',
          file: 'sequences/sms/img/4.png',
        },
        {
          id: 'sms-04',
          file: 'sequences/sms/img/5.png',
          nextSequence: '/ending-gay'
        }
      ],
      music: {
        name: 'Smooth',
        file: 'sequences/sms/sound/smooth.mp3'
      }
    }
  }
}
