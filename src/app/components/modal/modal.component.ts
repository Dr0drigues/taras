import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Button, ButtonDirective} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'tn-modal',
  templateUrl: './modal.component.html',
  imports: [
    DialogModule,
    ButtonDirective,
    InputTextModule,
    Button
  ],
  standalone: true
})
export class ModalComponent {
  @Input()
  visible: boolean;
  @Input()
  text: string;
  @Input()
  ok: string;
  @Input()
  close: string;

  constructor(private readonly router: Router) {
  }

  goHome() {
    this.visible = false;
    this.router.navigate(['/']);
  }
}
