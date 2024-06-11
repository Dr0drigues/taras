import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {trigger, state, style, animate, transition, AnimationEvent} from '@angular/animations';
import {ImageComponent} from '../../../components/image/image.component';
import {MusicComponent} from '../../../components/music/music.component';
import {Image, Music} from '../../../models/sequence.model';


@Component({
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.scss'],
  selector: 'tn-envelope',
  standalone: true,
  imports: [
    MusicComponent,
    ImageComponent
  ],
  animations: [
    trigger('openCloseEnvelope', [
      state('open', style({
        transform: 'rotatex(0deg)',
        zIndex: 1
      })),
      state('close', style({
        transform: 'rotatex(0deg)',
        zIndex: 5
      })),
      transition('open => close', [
        animate('0.4s')
      ]),
      transition('close => open', [
        animate('0.4s')
      ])
    ]),
    trigger('openCloseLetter', [
      state('open', style({
        transform: 'translatey(-60px)',
        zIndex: 2
      })),
      state('close', style({
        transform: 'translatey(0px)',
        zIndex: 1
      })),
      transition('open => close', [
        animate('0.4s')
      ]),
      transition('close => open', [
        animate('0.4s')
      ])
    ]),
    trigger('heartAnimation', [
      state('open', style({
        opacity: 1,
        transform: 'scale(1)',
        animation: 'slideUp 4s linear 1, sideSway 2s ease-in-out 4 alternate'
      })),
      state('close', style({
        opacity: 0,
        animation: 'none'
      })),
      transition('open => close', [
        animate('0.4s')
      ]),
      transition('close => open', [
        animate('0.4s')
      ])
    ])
  ]
})
export class EnvelopeComponent {
  @ViewChild('envelope') envelope: ElementRef;
  envelopeState = 'close';
  letterState = 'close';
  heartState = 'close';
  envelopeAnimationfinished = false;
  letterAnimationfinished = false;
  heartAnimationfinished = false;

  public music: Music = {
    name: 'envelope',
    file: 'sequences/endings/envelope/love.mp3'
  };
  letter: Image = {
    id: 'letter',
    file: 'sequences/endings/envelope/love.png'
  };
  gif: Image = {
    id: 'gif',
    files: [
      'sequences/endings/envelope/1.jpg',
      'sequences/endings/envelope/2.jpg',
      'sequences/endings/envelope/3.jpg',
      'sequences/endings/envelope/4.jpg',
      'sequences/endings/envelope/5.jpg',
      'sequences/endings/envelope/6.jpg',
      'sequences/endings/envelope/7.jpg',
      'sequences/endings/envelope/8.jpg',
      'sequences/endings/envelope/9.jpg',
      'sequences/endings/envelope/10.jpg',
      'sequences/endings/envelope/11.jpg',
      'sequences/endings/envelope/12.jpg',
      'sequences/endings/envelope/13.jpg',
      'sequences/endings/envelope/14.jpg',
      'sequences/endings/envelope/15.jpg',
      'sequences/endings/envelope/16.jpg',
      'sequences/endings/envelope/17.jpg',
      'sequences/endings/envelope/18.jpg',
      'sequences/endings/envelope/19.jpg',
      'sequences/endings/envelope/20.jpg',
      'sequences/endings/envelope/21.jpg',
      'sequences/endings/envelope/22.jpg',
      'sequences/endings/envelope/23.jpg',
      'sequences/endings/envelope/24.jpg',
      'sequences/endings/envelope/25.jpg',
      'sequences/endings/envelope/26.jpg',
      'sequences/endings/envelope/27.jpg',
      'sequences/endings/envelope/28.jpg',
      'sequences/endings/envelope/29.jpg',
      'sequences/endings/envelope/30.jpg',
    ],
    duration: 1000,
  };

  open() {
    this.envelopeState = 'open';
    this.letterState = 'open';
    this.heartState = 'open';
  }

  onEnvelopeAnimationDone($event: AnimationEvent) {
    if ($event.toState === 'open') {
      this.envelopeAnimationfinished = true;
    }
  }

  onLetterAnimationDone($event: AnimationEvent) {
    if ($event.toState === 'open') {
      this.letterAnimationfinished = true;
    }
  }

  onHeartAnimationDone($event: AnimationEvent) {
    if ($event.toState === 'open') {
      this.heartAnimationfinished = true;
    }
  }
}
