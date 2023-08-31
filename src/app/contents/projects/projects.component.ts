import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../micro_components/Projects/project/project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  showOverlay = false;
  
  projects: Project[] = [];
  bigI: string = '';

  constructor(private title: Title, private serviceprojects: ProjectService) { }

  ngOnInit(): void {
    this.title.setTitle('Projects - Portifolio');
    this.getprojects();
  }

  getprojects(): void{
    this.serviceprojects.getprojects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  showImage(image: string): void{
    if (image == '') {
      this.showOverlay = false  
    } else {
      this.showOverlay = true
    }
    this.bigI = image
  }


}
