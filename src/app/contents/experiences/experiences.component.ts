import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ExperiencesService } from './experiences.service';
import { Experience } from './experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences: Experience[] = [];


  constructor(private title: Title, private serviceexperiences: ExperiencesService) { }

  ngOnInit(): void {
    this.title.setTitle('Experiences - Portifolio');
    this.getexperiences();
  }
  
  getexperiences(): void{
    this.serviceexperiences.getexperiences().subscribe((experience) => {
      this.experiences = experience;
      console.log(this.experiences)
    });
  }

}
