import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Project } from "../micro_components/Projects/project/project";
import { Observable } from "rxjs/internal/Observable";
import { Tecnologies } from "./tecnologies";

@Injectable({
    providedIn: "root"
})
export class ProjectService{

    constructor(
        private http: HttpClient
    ) { }

    getprojects(): Observable<Project[]>{
        return this.http.get<Project[]>("http://localhost:3000/projects",{ headers: { 'Content-Type': 'application/json' } });
    }

    gettechnologies(): Observable<Tecnologies[]>{
        return this.http.get<Tecnologies[]>('http://localhost:3000/technologies',{ headers: { 'Content-Type': 'application/json' } });
    }

}