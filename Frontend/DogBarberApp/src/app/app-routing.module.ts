import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/AuthGuard';
import { AppointmentsComponent } from './home/appointments/appointments.component';
import { HomeComponent } from './home/home.component';
import { NewappointmentComponent } from './home/newappointment/newappointment.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: 'user', component: UserComponent,
children: [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
]
},
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
  { path: 'newappointment', component: NewappointmentComponent },
  { path: 'appointments', component: AppointmentsComponent },
//   { path: 'newproject', component: AddprojectComponent },
//   { path: 'myprojects', component: MyprojectsComponent },
//   { path: 'forbidden', component: ForbiddenComponent }
// ] },
// {path: '404', component: NotfoundComponent},
 {path: '**', redirectTo: '/home'}

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
