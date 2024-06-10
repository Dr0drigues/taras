import {NgForOf, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Image, Sequence} from '../../models/sequence.model';
import {ImageComponent} from '../image/image.component';
import {MusicComponent} from '../music/music.component';

@Component({
  selector: 'tn-sequence',
  template: `
    <div (click)="nextImage()">
      <ng-container *ngFor="let image of sequence.images; index as i; trackBy: trackByFn">
        <tn-image [image]="image" *ngIf="i === currentIndex"></tn-image>
      </ng-container>
      <tn-music [music]="sequence.music"></tn-music>
    </div>
  `,
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

  trackByFn(index: number, item: Image): number {
    return index; // or unique id corresponding to the item
  }
}
