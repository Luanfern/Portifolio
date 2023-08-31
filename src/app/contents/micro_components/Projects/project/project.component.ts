import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnChanges {

  constructor(private router: Router) { }

  @Output() showOverlayImage = new EventEmitter<string>();

  @Input()
  titleproject: string = '';

  @Input()
  imagesproject: string[] = [];

  @Input()
  descriptionproject: string = '';

  @Input()
  linkproject: string = '';

  @Input()
  logoproject: string = '';

  title: string = '';
  images: string[] = [];
  description: string = '';
  link: string = '';
  logo: string = '';

  actualImage: number = 0;


  ngOnChanges(): void {
    this.title = this.titleproject;
    this.images = this.imagesproject;
    this.description = this.descriptionproject;
    this.link = this.linkproject;
    this.logo = this.logoproject;
    this.actualImage = 0;
  }

  ngOnInit(): void {
  }

  nextImage(): void{
    let fi = this.actualImage + 1;
    if (fi >= this.images.length) {
      this.actualImage = 0;  
    } else {
      this.actualImage++;
    }
  }

  backImage(): void{
    let fi = this.actualImage - 1;
    if (fi < 0) {
      this.actualImage = this.images.length-1;  
    } else {
      this.actualImage--;
    }
  }

  clickshowOverlayImage(image: string){
    this.showOverlayImage.emit(image)
  }
}
