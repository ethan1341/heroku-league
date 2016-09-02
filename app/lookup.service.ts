import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { UserObject } from './userobject';
import './rxjs-operators'
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class LookupService{
    constructor (private http: Http) {}
    summonerName: string;
    private postURL = '/lookup/matchhistory/'

    searchUser( info:any ){
        var summonerURL = this.postURL + info;
        return this.http.get(summonerURL)
            .map(this.extractData)
            .catch(this.handleError)

    }
    extractData(res: Response){
        let body = res.json();
        console.log(body)
       return body;
    }



    private handleError (error: any) {
        console.log(error);
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            -   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}