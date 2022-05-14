import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Skill } from "../micro_components/skill/skill";

@Injectable({
    providedIn: "root"
})

export class HomeService{

    constructor(private http: HttpClient){}

    getskills(): Observable<Skill[]>{
        return this.http.get<Skill[]>('http://localhost:3000/skills',{ headers: { 'Content-Type': 'application/json' } });
    }
}