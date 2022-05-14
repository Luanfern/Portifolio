import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Project } from "../micro_components/Projects/project/project";
import { Tecnologies } from "../projects/tecnologies";

@Injectable({
    providedIn: "root"
})
export class ProjectviewService{

    constructor(private http: HttpClient){}

    getProject(id: string): Observable<any>{
        return this.http.get<any>('http://localhost:3000/projectsunique?id='+id,{ headers: { 'Content-Type': 'application/json' } });
    }

    gettechsproject(idtechs: number[]): Observable<Tecnologies[]>{
        return this.http.get<Tecnologies[]>('http://localhost:3000/techsonproject?idtechs='+idtechs,{ headers: { 'Content-Type': 'application/json' } });
    }
}