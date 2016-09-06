import { Injectable }    from '@angular/core';
import { Http,Response } from '@angular/http';
import '../rxjs-operators'
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
        let errMsg = (error.message) ? error.message :
            console.log(error.status,'hello')
        return Observable.throw(error);
    }
}