import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './components/users/user-registration/user-registration.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';



const routes: Routes = [
  {
    path: 'user-register',
    component: UserRegistrationComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user/details',
    component: UserDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
