import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Project } from "../micro_components/Projects/project/project";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: "root"
})
export class ProjectService{

    constructor(
        private http: HttpClient
    ) { }

    getprojects(): Observable<Project[]>{
        return this.http.get<Project[]>("https://luanfern.github.io/Luanfern/projects.json",{ headers: { 'Content-Type': 'application/json' } });
    }
}