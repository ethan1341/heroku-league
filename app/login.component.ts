import { Component } from '@angular/core';
import { UserObject } from './userobject';
import { LoginService } from './user-login.service';
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

  needsRegistration(registerStatus:boolean){
    this.registration = registerStatus;
  }

  setUserName(username :string){
   this.userObject.username = username;
    console.log(this.userObject.username)
  }

  setPassword(password: string){
    this.userObject.password = password;
    console.log(this.userObject.password)
  }

  registerUsername(username: string){
    console.log(username)
    this.registerObject.username = username;
  }

  registerPassword(password: string){
    console.log(password)
    this.registerObject.password = password;
  }
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
