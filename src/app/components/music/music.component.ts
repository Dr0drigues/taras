import { Component, Input } from '@angular/core';
import {Music} from '../../models/sequence.model';

@Component({
  selector: 'tn-music',
  template: `
    <audio [src]="music.file" autoplay controls loop></audio>
  `,
  styles: [`
    audio {
      position: fixed;
      bottom: 0;
      z-index: 99;
    }
  `],
  standalone: true
})
export class MusicComponent {
  @Input() music: Music;
}
