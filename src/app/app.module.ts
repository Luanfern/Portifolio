import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './contents/home/home.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './contents/projects/projects.component';
import { SkillComponent } from './contents/micro_components/skill/skill.component';
import { ProjectComponent } from './contents/micro_components/Projects/project/project.component';
import { ProjectService } from './contents/projects/project.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appService } from './app.service';
import { ExperiencesComponent } from './contents/experiences/experiences.component';
import { ExperienceComponent } from './contents/micro_components/experience/experience.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    SkillComponent,
    ProjectComponent,
    ExperiencesComponent,
    ExperienceComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'projects', component: ProjectsComponent
      },
      {
        path: 'experiences', component: ExperiencesComponent
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'home', pathMatch: 'full'
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectService,
    appService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
