import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Experience } from './experience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(
    private http: HttpClient
  ) { }

  getexperiences(): Observable<Experience[]>{
      return this.http.get<Experience[]>("https://luanfern.github.io/Luanfern/experiences.json",{ headers: { 'Content-Type': 'application/json' } });
  }
}