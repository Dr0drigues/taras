import {NgForOf, NgOptimizedImage} from '@angular/common';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AnimatedImage, Image, StaticImage} from '../../models/sequence.model';


@Component({
  selector: 'tn-image',
  template: `
    @if (isStaticImage(image)) {
      <img [ngSrc]="image.file" alt="image.file" fill>
    } @else if (isAnimatedImage(image)) {
      <img [ngSrc]="currentFile" alt="file" fill>
    }
    @if (image.soundEffect) {
      <audio [src]="image.soundEffect" autoplay></audio>
    }
  `,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  standalone: true
})
export class ImageComponent implements OnInit, OnDestroy {
  private _image: Image;
  currentFile: string;
  private intervalId: number;

  @Input()
  set image(image: Image) {
    this._image = image;
    if (this.isAnimatedImage(image)) {
      this.currentFile = image.files[0];
    }
  }

  get image(): Image {
    return this._image;
  }

  ngOnInit() {
  if (this.isAnimatedImage(this.image)) {
    let index = 0;
    const duration = this.image.duration || 1000; // Utilisez une valeur par défaut si duration est undefined
    this.intervalId = setInterval(() => {
      index = (index + 1) % (this.image as AnimatedImage).files.length;
      this.currentFile = (this.image as AnimatedImage).files[index];
      console.log('Current file:', this.currentFile); // Ajout du log de débogage
    }, duration);
  }
}

  ngOnDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  isStaticImage(image: Image): image is StaticImage {
    return (image as StaticImage).file !== undefined;
  }

  isAnimatedImage(image: Image): image is AnimatedImage {
    return (image as AnimatedImage).files !== undefined;
  }
}
