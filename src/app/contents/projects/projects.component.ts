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
  projects: Project[] = [];
  showBigImage: boolean = true;
  bigI: string = '';

  constructor(private title: Title, private serviceprojects: ProjectService) { }

  ngOnInit(): void {
    this.title.setTitle('Projects - Portifolio');
    this.getprojects();
  }

  getprojects(): void{
    this.serviceprojects.getprojects().subscribe((projects) => {
      console.log(projects);
      this.projects = projects;
    });
  }

  showImage(image: string): void{
    this.showBigImage = !this.showBigImage
    this.bigI = image
    alert(this.showBigImage)
  }


}
