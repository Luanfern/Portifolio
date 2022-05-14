import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnChanges {

  constructor(private router: Router) { }

  @Input()
  idproject: number = 0;

  @Input()
  titleproject: string = '';

  @Input()
  imageproject: string = '';

  @Input()
  descriptionproject: string = '';

  @Input()
  technologiesproject: number[] = [];

  @Input()
  linkproject: string[] = [];

  @Input()
  typelinkproject: string[] = [];

  id: number = 0;
  title: string = '';
  image: string = '';
  description: string = '';
  technologies: number[] = [];
  link: string[] = [];
  typelink: string[] = [];


  ngOnChanges(): void {
    this.id = this.idproject;
    this.title = this.titleproject;
    this.image = this.imageproject;
    this.description = this.descriptionproject;
    this.technologies = this.technologiesproject;
    this.link = this.linkproject;
    this.typelink = this.typelinkproject;
  }

  ngOnInit(): void {
  }

  seemore(id: number): void {
    this.router.navigate(['projects/'+id]);
  }

}
