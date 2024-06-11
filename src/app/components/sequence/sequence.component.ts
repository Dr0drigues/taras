import {NgForOf, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Sequence} from '../../models/sequence.model';
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

  constructor(private readonly router: Router) {
  }

  nextImage() {
    if (this.sequence.images[this.currentIndex].nextSequence) {
      this.router.navigate([this.sequence.images[this.currentIndex].nextSequence]);
    }

    if (this.currentIndex < this.sequence.images.length - 1) {
      this.currentIndex++;
    }
  }
}
