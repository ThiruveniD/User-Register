import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  UserList: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUserList();
  }
  getAllUserList()
  {
    this.userService.getUserDetails().subscribe(res=>
      {
        if(res['code']==200)
        {
          this.UserList=res['data'];
                 }
      })
  }
}
