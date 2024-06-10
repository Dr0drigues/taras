import {Component, HostListener} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LOGIN } from '../../models/utils/constants.utils';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'tn-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [RouterLink, FormsModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name = '';

  @HostListener('document:keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent): void {
    console.log('onEnter', event);
    if (event.target instanceof HTMLInputElement) {
      this.goToHome();
    }
  }

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
  ) {}

  goToHome(): void {
    console.log('goToHome');
    if (this.name) {
      this.storageService.setItem(LOGIN, this.name);
      this.router.navigate(['/home']);
    }
  }
}
