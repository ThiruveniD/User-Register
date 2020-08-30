"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRegistrationComponent = exports.EmailPattern = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.EmailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(fb, router, location) {
        this.fb = fb;
        this.router = router;
        this.location = location;
        this.mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        this.initValues();
        this.initRegisterForm();
    };
    UserRegistrationComponent.prototype.initValues = function () {
        this.UserDetails = {
            FirstName: '',
            LastName: '',
            MobileNo: '',
            Gender: '',
            EmailId: '',
            Password: '',
            ConfirmPassword: '',
            Address: ''
        };
    };
    UserRegistrationComponent.prototype.initRegisterForm = function () {
        this.userRegistrationForm = this.fb.group({
            FirstName: [this.UserDetails.FirstName, [forms_1.Validators.required]],
            LastName: [this.UserDetails.LastName, [forms_1.Validators.required]],
            EmailId: [this.UserDetails.EmailId, [forms_1.Validators.required, forms_1.Validators.pattern(exports.EmailPattern)]],
            MobileNo: [this.UserDetails.MobileNo, [forms_1.Validators.required]],
            Gender: [this.UserDetails.Gender, [forms_1.Validators.required]],
            Password: [this.UserDetails.Password, [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
            ConfirmPassword: [this.UserDetails.ConfirmPassword, [forms_1.Validators.required, this.passwordValidator()]],
            Address: [this.UserDetails.Address, [forms_1.Validators.required]]
        });
    };
    UserRegistrationComponent.prototype.submitData = function () {
        this.UserDetails = this.prepareSaveRequest();
        localStorage.setItem('userDetails', JSON.stringify(this.UserDetails));
        alert("User Added Successfully");
        this.router.navigate(['/login']);
    };
    UserRegistrationComponent.prototype.prepareSaveRequest = function () {
        var FormValue = this.userRegistrationForm.value;
        var saveRequest = {
            FirstName: FormValue.FirstName,
            LastName: FormValue.LastName,
            EmailId: FormValue.EmailId,
            MobileNo: FormValue.MobileNo,
            Address: FormValue.Address,
            Gender: FormValue.Gender,
            Password: FormValue.Password,
            ConfirmPassword: FormValue.ConfirmPassword
        };
        return saveRequest;
    };
    UserRegistrationComponent.prototype.mobileInput = function (e) {
        var code = e.key.charCodeAt(0);
        if (!(code >= 48 && code <= 57)) {
            e.preventDefault();
        }
    };
    UserRegistrationComponent.prototype.NameInput = function (event) {
        if (!((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90))) {
            event.preventDefault();
        }
    };
    UserRegistrationComponent.prototype.passwordValidator = function () {
        var _this = this;
        return function (control) {
            var controlValue = control.value;
            if (_this.userRegistrationForm && controlValue) {
                var password = _this.userRegistrationForm.get('Password').value;
                var confirmPassword = controlValue;
                if (password == confirmPassword) {
                    return null;
                }
                else {
                    return { mismatched: true };
                }
            }
            else {
                return null;
            }
            ;
        };
    };
    UserRegistrationComponent.prototype.clickBackButton = function () {
        this.location.back();
    };
    UserRegistrationComponent.prototype.changePassword = function () {
        this.userRegistrationForm.controls['ConfirmPassword'].setValue('');
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-user-registration',
            templateUrl: './user-registration.component.html',
            styleUrls: ['./user-registration.component.css']
        })
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
