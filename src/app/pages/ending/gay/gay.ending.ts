import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ImageComponent} from '../../../components/image/image.component';
import {ModalComponent} from '../../../components/modal/modal.component';
import {MusicComponent} from '../../../components/music/music.component';
import {Image} from '../../../models/sequence.model';

@Component({
  selector: 'tn-gay-ending',
  template: `
    <tn-image [image]="image" (click)="toggleModal()"></tn-image>
    <tn-music [music]="music"></tn-music>
    <tn-modal [text]="text" [ok]="ok" [close]="close" [visible]="visible"></tn-modal>
  `,
  imports: [
    ImageComponent,
    MusicComponent,
    ModalComponent
  ],
  standalone: true
})
export class GayEndingComponent {
  image: Image = {
    id: 'ending-gay',
    files: [
      'sequences/endings/gay/1.jpg',
      'sequences/endings/gay/2.jpg',
      'sequences/endings/gay/3.jpg',
      'sequences/endings/gay/4.jpg',
    ],
    duration: 500,
  };
  music = {
    name: 'GayEnding',
    file: 'sequences/endings/gay/song.mp3'
  }
  close = 'Fermer et retourner à l\'accueil';
  ok = 'Je reste PD';
  text = 'Tu es un homme, tu aimes les hommes et tu es fier de l\'être. Tu as le droit de t\'aimer tel que tu es, tout comme ces deux beaux mecs qui s\'embrassent. Tu as le droit de vivre ta vie comme tu l\'entends, sans te soucier du regard des autres. Tu as le droit de t\'aimer et d\'être aimé en retour. Tu as le droit d\'être heureux.';
  visible = false;

  constructor(private readonly router: Router) {
  }

  toggleModal() {
    this.visible = !this.visible;
  }
}
