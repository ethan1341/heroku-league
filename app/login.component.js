"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_login_service_1 = require('./user-login.service');
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.userObject = { username: null, password: null };
        this.registerObject = { username: null, password: null };
        this.registration = false;
    }
    LoginComponent.prototype.needsRegistration = function (registerStatus) {
        this.registration = registerStatus;
    };
    LoginComponent.prototype.setUserName = function (username) {
        this.userObject.username = username;
        console.log(this.userObject.username);
    };
    LoginComponent.prototype.setPassword = function (password) {
        this.userObject.password = password;
        console.log(this.userObject.password);
    };
    LoginComponent.prototype.registerUsername = function (username) {
        console.log(username);
        this.registerObject.username = username;
    };
    LoginComponent.prototype.registerPassword = function (password) {
        console.log(password);
        this.registerObject.password = password;
    };
    LoginComponent.prototype.postRegisterInfo = function () {
        var _this = this;
        console.log(this.registerObject);
        var userInfo = this.registerObject;
        this.loginService.registerUser(userInfo)
            .subscribe(function (response) { return _this.response; }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-selector',
            templateUrl: 'html/login.html',
            styleUrls: ['css/login.css'],
            providers: [user_login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [user_login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
/*interface userNameLayout{
  username: string;
  password: string;
}*/
//# sourceMappingURL=login.component.js.map