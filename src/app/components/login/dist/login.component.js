"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_registration_component_1 = require("../users/user-registration/user-registration.component");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initLoginForm();
    };
    LoginComponent.prototype.initLoginForm = function () {
        this.loginForm = this.fb.group({
            EmailId: ['', [forms_1.Validators.required, forms_1.Validators.pattern(user_registration_component_1.EmailPattern)]],
            Password: ['', [forms_1.Validators.required]]
        });
    };
    LoginComponent.prototype.submitData = function () {
        var FormValue = this.loginForm.value;
        var userDetails = localStorage.getItem('userDetails');
        if (userDetails) {
            console.log(JSON.parse(userDetails));
            userDetails = JSON.parse(userDetails);
            console.log(userDetails.EmailId, userDetails.Password);
            if (FormValue.EmailId == userDetails['EmailId'] && FormValue.Password == userDetails['Password']) {
                alert("Login SuccessFul");
                this.router.navigate(['/user/details']);
            }
            else {
                alert('Incorrect User Name or Password');
            }
        }
        else {
            alert("User Does not exist");
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
