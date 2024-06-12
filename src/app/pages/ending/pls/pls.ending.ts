import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ImageComponent} from '../../../components/image/image.component';
import {ModalComponent} from '../../../components/modal/modal.component';
import {MusicComponent} from '../../../components/music/music.component';
import {Image} from '../../../models/sequence.model';

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
export class PLSEndingComponent {
  image: Image = {
    id: 'pls-gay',
    file: 'sequences/endings/pls/tshirt-en-pls.png',

  };
  music = {
    name: 'PLSEnding',
    file: 'sequences/endings/pls/sound_of_silence.mp3'
  }
  close = 'Fermer et retourner à l\'accueil';
  ok = 'Je quitte la PLS';
  text = 'Theo est en PLS... Regarde ce que tu as fait à cette petite bouille ! Essais de le réconforter en faisant de meilleurs choix.';
  visible = false;

  constructor(private readonly router: Router) {
  }

  toggleModal() {
    this.visible = !this.visible;
  }
}
