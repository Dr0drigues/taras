import {NgForOf, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Image, Sequence} from '../../models/sequence.model';
import {ImageComponent} from '../image/image.component';
import {MusicComponent} from '../music/music.component';

@Component({
  selector: 'tn-sequence',
  templateUrl: 'sequence.component.html',
  imports: [
    ImageComponent,
    MusicComponent,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class SequenceComponent {
  @Input() sequence: Sequence;
  currentIndex = 0;

  nextImage() {
    if (this.currentIndex < this.sequence.images.length - 1) {
      this.currentIndex++;
    }
  }
}
