import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactmeService{

    constructor(private http: HttpClient){}

    hasErrorValidate(control: AbstractControl, errorName: string): boolean{
        if ((control.dirty || control.touched) && control.hasError(errorName)){
            return true;
        }
        return false;
    }

    hasError(control: AbstractControl, errorName: string): boolean{
        return control.hasError(errorName);
    }

    sendEmail(form: any): Observable<any>{
        return this.http.post<any>('http://localhost:3000/sendemail', JSON.stringify(form) ,{ headers: { 'Content-Type': 'application/json' }});
    }

}