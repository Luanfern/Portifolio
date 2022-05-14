import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../micro_components/Projects/project/project';
import { Tecnologies } from '../projects/tecnologies';
import { ProjectviewService } from './projectview.service';

@Component({
  selector: 'app-projectview',
  templateUrl: './projectview.component.html',
  styleUrls: ['./projectview.component.scss']
})
export class ProjectviewComponent implements OnInit {

  constructor(private actroute: ActivatedRoute,private service: ProjectviewService) { }

  project: Project ={
    title_project: '',
    logo_project: '',
    description_project: '',
    technologies_project: [],
    link_project: [],
    id_project: 0
  };

  technologies_proj: Tecnologies[] = [];

  ngOnInit(): void {
    this.actroute.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.service.getProject(params.get('id')!).subscribe(data => {
        this.project = data[0];
        this.project.technologies_project = JSON.parse(data[0].technologies_project);
        this.project.link_project = JSON.parse(data[0].link_project);
        console.log(this.project.link_project);
        this.service.gettechsproject(this.project.technologies_project!).subscribe(data => {
          this.technologies_proj = data;
          console.log(this.technologies_proj);
        });
      });
    });
  }

}
