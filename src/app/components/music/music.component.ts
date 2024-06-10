import { Component, Input } from '@angular/core';
import {Music} from '../../models/sequence.model';

@Component({
  selector: 'tn-music',
  template: `
    <audio [src]="music.file" autoplay></audio>
  `,
  standalone: true
})
export class MusicComponent {
  @Input() music: Music;
}
