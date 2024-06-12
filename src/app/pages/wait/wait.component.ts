import {AsyncPipe, DatePipe} from '@angular/common';
import {Component, Host, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import {map, takeWhile, timer} from 'rxjs';

@Component({
  selector: 'tn-wait',
  standalone: true,
  imports: [
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './wait.component.html',
  styleUrl: './wait.component.css'
})
export class WaitComponent {
  totalSeconds = 300;

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event) {
    event.preventDefault();
    event.returnValue = false;
  }

  constructor(
    private readonly router: Router,
  ) {
  }

  timeRemaining$ = timer(0, 1000).pipe(
    map(n => (this.totalSeconds - n) * 1000),
    takeWhile(n => n >= 0),
  );
}
