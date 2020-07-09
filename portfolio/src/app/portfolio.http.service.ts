import { Injectable } from '@angular/core';
import { ContactorModel } from './contact/contactor.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PortfolioHttpService {
    url: string = ""
    error= null;
    constructor(private http: HttpClient){}

    sendContactorDetails(data: ContactorModel) {
        this.http.post(
            this.url,
            data
        ).subscribe(responsedata => {
            console.log(responsedata)
        }, 
        error => {
            this.error = error.message;
        } );
    }
}