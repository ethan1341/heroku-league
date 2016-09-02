import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Champion } from './Champion';

@Injectable()

export class ChampionService {
  constructor(private http: Http) {};
  private championsUrl = '/champions';

  getChampions(): Observable<Champion[]> {// Data will be in observerable
    //Observable place holderv/ has methods like subscribe
    //getChampions returns the placeholder
    return this.http.get(this.championsUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }

  getChampion(ID:number | string){
    var specificUrl = '/champions/detail/' + ID;
    return this.http.get(specificUrl)
        .map(this.extractChampion)
        .catch(this.handleError)
  }

  extractChampion(res: Response){
    var body = res.json();
    var lowercaseFull = body[0].championObject.key.toLowerCase();
    body[0].championObject.keyLower = lowercaseFull;
    var backgroundURL = 'http://lolstatic-a.akamaihd.net/game-info/1.1.9/images/champion/backdrop/bg-' + body[0].championObject.keyLower + '.jpg';
    body[0].championObject.bgLower = backgroundURL;
    return body[0].championObject;
  }


  private extractData(res: Response) {
    var championObject = {};
    championObject['allChampions'] = []
    championObject['Assassins'] = {}
    championObject['Assassins']['AssassinsData'] =[];
    championObject['Fighters'] = {};
    championObject['Fighters']['FightersData'] =[];
    championObject['Mages'] = {}
    championObject['Mages']['MagesData'] =[];
    championObject['Supports'] = {}
    championObject['Supports']['SupportsData'] =[];
    championObject['Tanks'] = {}
    championObject['Tanks']['TanksData'] =[];
    championObject['Marksmen'] = {}
    championObject['Marksmen']['MarksmenData'] =[];
    var body = res.json();
    var key: any;
    for(var i = 0; i < body.length; i++){
      championObject['allChampions'].push(body[i].championObject);
      body[i].championObject.tags = body[i].championObject.tags[0];
      body[i].championObject.image = body[i].championObject.image.full;
        switch(body[i].championObject.tags){
          case "Assassin":
            championObject['Assassins']['AssassinsData'].push(body[i].championObject);
            break;
          case "Fighter":
            championObject['Fighters']['FightersData'].push(body[i].championObject);
            break;
          case "Mage":
            championObject['Mages']['MagesData'].push(body[i].championObject);
            break;
          case "Support":
            championObject['Supports']['SupportsData'].push(body[i].championObject);
            break;
          case "Tank":
            championObject['Tanks']['TanksData'].push(body[i].championObject);
            break;
          case "Marksman":
            championObject['Marksmen']['MarksmenData'].push(body[i].championObject);
            break;
        }
    }
    return championObject;
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
