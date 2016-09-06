import { Subscription }       from 'rxjs/Subscription';
import { Component,  OnInit } from '@angular/core';
import {  Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'errors-selector',
    templateUrl:'html/errors.html',
    styleUrls:['css/errors.css'],
})

export class ErrorsComponent implements OnInit{
    responseError: number;
    private sub: Subscription;
    private router: Router
    constructor(
        private route: ActivatedRoute
    ){};
    ngOnInit(){
        this.sub = this.route.params.subscribe(params =>{
            let response = +params['response'];
            this.responseError = response
        })
    }
}