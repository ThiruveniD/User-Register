import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, MinLengthValidator } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
export const EmailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {
  userRegistrationForm: FormGroup;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  submitted: boolean;
  UserDetails: User
  constructor(private fb: FormBuilder,private router:Router,private location:Location) { }

  ngOnInit(): void {
    this.initValues()
    this.initRegisterForm()
  }
  initValues() {
    this.UserDetails = {
      FirstName: '',
      LastName: '',
      MobileNo: '',
      Gender: '',
      EmailId: '',
      Password: '',
      ConfirmPassword: '',
      Address: ''
    }
  }
  initRegisterForm() {
    this.userRegistrationForm = this.fb.group({
      FirstName: [this.UserDetails.FirstName, [Validators.required]],
      LastName: [this.UserDetails.LastName, [Validators.required]],
      EmailId: [this.UserDetails.EmailId, [Validators.required,Validators.pattern(EmailPattern)]],
      MobileNo: [this.UserDetails.MobileNo, [Validators.required]],
      Gender: [this.UserDetails.Gender, [Validators.required]],
      Password: [this.UserDetails.Password, [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: [this.UserDetails.ConfirmPassword, [Validators.required, this.passwordValidator()]],
      Address: [this.UserDetails.Address, [Validators.required]]
    })
  }
    submitData() {
    this.UserDetails = this.prepareSaveRequest();
    localStorage.setItem('userDetails',JSON.stringify(this.UserDetails))
   alert("User Added Successfully");
   this.router.navigate(['/login'])
  }
  prepareSaveRequest(): User {
    const FormValue = this.userRegistrationForm.value;
    const saveRequest: User = {
      FirstName: FormValue.FirstName,
      LastName: FormValue.LastName,
      EmailId: FormValue.EmailId,
      MobileNo: FormValue.MobileNo,
      Address: FormValue.Address,
      Gender: FormValue.Gender,
      Password: FormValue.Password,
      ConfirmPassword: FormValue.ConfirmPassword

    }
    return saveRequest
  }
  mobileInput(e) {
    let code = e.key.charCodeAt(0);
    if (!(code >= 48 && code <= 57)) {
      e.preventDefault();
    }
  }
  NameInput(event) {
    if (!((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90))) {
      event.preventDefault();
    }
  }
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let controlValue = control.value;
      if (this.userRegistrationForm && controlValue) {

        let password = this.userRegistrationForm.get('Password').value;
        let confirmPassword = controlValue;

        if (password == confirmPassword) {
          return null;
        } else {
          return { mismatched: true };
        }

      } else {
        return null;
      };

    };
  }
  clickBackButton()
  {
    this.location.back()
  }
  changePassword()
  {
    this.userRegistrationForm.controls['ConfirmPassword'].setValue('')
  }
}
