/*import { Injectable }    from '@angular/core'
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { UserObject } from './userobject';
import './rxjs-operators'
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class LoginService{

    constructor (private http: Http) {}
    private postURL = '/post'
    registerUser( info: UserObject ){
        console.log(info);
        let body = JSON.stringify(info);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.postURL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    loginUser( info: UserObject ){

    }
    extractData(res: Response){
        console.log('did this run')
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        console.log(error);
        let errMsg = (error.message) ? error.message :
            -   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

} */