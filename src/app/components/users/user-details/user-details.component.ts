import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  UserDetails: any;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.UserDetails = JSON.parse(localStorage.getItem('userDetails'))
  }
  clickBackButton() {
    this.location.back()
  }

}
