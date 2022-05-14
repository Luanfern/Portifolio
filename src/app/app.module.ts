import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './contents/home/home.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './contents/projects/projects.component';
import { ContactmeComponent } from './contents/contactme/contactme.component';
import { SkillComponent } from './contents/micro_components/skill/skill.component';
import { ProjectComponent } from './contents/micro_components/Projects/project/project.component';
import { CertificatesComponent } from './contents/certificates/certificates.component';
import { ProjectviewComponent } from './contents/projectview/projectview.component';
import { ProjectService } from './contents/projects/project.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactmeService } from './contents/contactme/contactme.service';
import { appService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ContactmeComponent,
    SkillComponent,
    ProjectComponent,
    CertificatesComponent,
    ProjectviewComponent,
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
        path: 'projects/:id', component: ProjectviewComponent
      },
      {
        path: 'contactme', component: ContactmeComponent
      },
      {
        path: 'certificates', component: CertificatesComponent
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
    ContactmeService,
    appService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
