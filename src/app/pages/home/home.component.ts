import {NgOptimizedImage} from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {LOGIN} from '../../models/utils/constants.utils';
import {StorageService} from '../../services/storage/storage.service';

@Component({
  selector: 'tn-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  name = "";

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
  ) {
  }

  ngAfterViewInit(): void {
    this.name = this.storageService.getItem(LOGIN);
  }

  goToCoffee(): void {
    this.router.navigate(['/coffee']);
  }

  wait(): void {
    this.router.navigate(['/wait']);
  }
}
