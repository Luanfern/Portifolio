import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../micro_components/Projects/project/project';
import { ProjectService } from './project.service';
import { Tecnologies } from './tecnologies';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  tecnologies: Tecnologies[] = [];

  projects: Project[] = [];
  showprojects: Project[] = [];

  constructor(private title: Title, private serviceprojects: ProjectService) { }

  ngOnInit(): void {
    this.title.setTitle('Projects - Portifolio');
    this.getprojects();
    this.gettechnologies();
  }

  getprojects(): void{
    this.serviceprojects.getprojects().subscribe((projects) => {
      console.log(projects);
      this.projects = projects;
      this.showprojects = projects;
    });
  }

  gettechnologies(): void{
    this.serviceprojects.gettechnologies().subscribe((tecnologies) => {
      console.log(tecnologies);
      this.tecnologies = tecnologies;
    });
  }

  tecnologychoose(id: number): void{
    console.log('id: ', id);
    const convert = this.projects[0].technologies_project!;
    console.log(convert);
    this.showprojects = this.projects.filter(project => project.technologies_project!.includes(id));
  }

}
