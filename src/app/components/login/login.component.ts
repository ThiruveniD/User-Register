import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailPattern } from '../users/user-registration/user-registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initLoginForm()
  }
  initLoginForm() {
    this.loginForm = this.fb.group({
      EmailId: ['', [Validators.required,Validators.pattern(EmailPattern)]],
      Password: ['', [Validators.required]]
    })
  }
  submitData() {
    const FormValue = this.loginForm.value;
    let userDetails: any = localStorage.getItem('userDetails');

    if (userDetails) {
      console.log(JSON.parse(userDetails));
      userDetails = JSON.parse(userDetails)
      console.log(userDetails.EmailId, userDetails.Password)
      if (FormValue.EmailId == userDetails['EmailId'] && FormValue.Password == userDetails['Password']) {
        alert("Login SuccessFul");
        this.router.navigate(['/user/details'])
      }
      else {
        alert('Incorrect User Name or Password')
      }

    }
    else {
      alert("User Does not exist")
    }
  }

}
