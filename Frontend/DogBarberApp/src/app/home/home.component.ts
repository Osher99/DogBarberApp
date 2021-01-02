import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../shared/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
   this.currentUser = this.userService.getCurrentUser();
   this.router.navigate(['/home/appointments']);
   console.log(this.currentUser);
  }

  onLogout() {
    this.currentUser = null;
    this.userService.removeCurrentUser();
    this.router.navigate(['/user/login']);
   }
}