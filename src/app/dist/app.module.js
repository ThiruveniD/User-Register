"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var user_list_component_1 = require("./components/users/user-list/user-list.component");
var user_details_component_1 = require("./components/users/user-details/user-details.component");
var user_registration_component_1 = require("./components/users/user-registration/user-registration.component");
var login_component_1 = require("./components/login/login.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_list_component_1.UserListComponent,
                user_details_component_1.UserDetailsComponent,
                user_registration_component_1.UserRegistrationComponent,
                login_component_1.LoginComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpClientModule
            ],
            providers: [http_1.HttpClient],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
