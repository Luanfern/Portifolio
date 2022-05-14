import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Certificate } from "./certificates";

@Injectable({
    providedIn: 'root'
})

export class CertificatesService {
    constructor(private http: HttpClient) { }

    getCertificates(): Observable<Certificate[]> {
        return this.http.get<Certificate[]>('http://localhost:3000/certificates');
    }
}