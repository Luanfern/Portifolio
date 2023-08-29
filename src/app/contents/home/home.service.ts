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
        return this.http.get<Skill[]>('https://luanfern.github.io/Luanfern/hardskills.json',{ headers: { 'Content-Type': 'application/json'} });
    }

    getsummary(): Observable<{"summary": string}>{
        return this.http.get<{"summary": string}>('https://luanfern.github.io/Luanfern/summary.json',{ headers: { 'Content-Type': 'application/json' } });
    }
}