import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Item } from './item';
@Injectable()

export class ItemsService{
    constructor(private http: Http){};
    private itemsUrl = '/items';

    getItems(): Observable<Item[]> {
        return this.http.get(this.itemsUrl)
            .map(this.extractData)
            .catch(this.handleError)
    }

    extractData(res: Response){
        var itemList: Item[] = [];
        var body = res.json();
        for(var i = 0; i < body.length;i++){
           itemList.push(body[i])
        }
        return itemList
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }



}
