import { Component } from '@angular/core';
import { UserObject } from './userobject';
import { LoginService } from './login.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'login-selector',
    templateUrl:'html/login.html',
    styleUrls:['css/login.css'],
    providers:[LoginService]

})


export class LoginComponent{
userObject:UserObject = {username:null,password:null};
registerObject: UserObject = {username:null, password:null};
registration = false;
  errorMessage: string;
  response:string;

  constructor(private loginService: LoginService){}

  postRegisterInfo(){
    console.log(this.registerObject);
    var userInfo:UserObject = this.registerObject;
    this.loginService.registerUser(userInfo)
      .subscribe(
      response => this.response ,
      error =>  this.errorMessage = <any>error)
  }

}

/*interface userNameLayout{
  username: string;
  password: string;
}*/
