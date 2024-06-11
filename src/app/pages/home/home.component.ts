import {NgOptimizedImage} from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  name = "";

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
  ) {
  }

  ngOnInit(): void {
    this.name = this.storageService.getItem(LOGIN);
  }

  goToCoffee(): void {
    this.storageService.setItem(LOGIN, this.name);
    this.router.navigate(['/coffee']);
  }

  wait(): void {
    this.storageService.setItem(LOGIN, this.name);
    this.router.navigate(['/wait']);
  }
}
