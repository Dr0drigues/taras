import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ImageComponent} from '../../../components/image/image.component';
import {ModalComponent} from '../../../components/modal/modal.component';
import {MusicComponent} from '../../../components/music/music.component';
import {Image} from '../../../models/sequence.model';
import {CAT_ENDING_TEXT} from '../../../models/utils/constants.utils';

@Component({
  selector: 'tn-pls-ending',
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
export class CatEndingComponent {
  image: Image = {
    id: 'cat-ending',
    file: 'sequences/endings/cat/4.png',
    text: CAT_ENDING_TEXT
  };
  music = {
    name: 'cat-ending',
    file: 'sequences/endings/cat/cat.mp3'
  }
  close = 'Fermer et retourner à l\'accueil';
  ok = 'Je quitte la PLS';
  text = 'Nara est devenue vieille fille avant l\'âge... Alors qu\'elle n\'a que 17 ans!';
  visible = false;

  constructor(private readonly router: Router) {
  }

  toggleModal() {
    this.visible = !this.visible;
  }
}
