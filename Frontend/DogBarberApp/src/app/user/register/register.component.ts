import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    try {
    this.service.register().subscribe(
      (result: any) => {
        if (result.UserName) {
          this.service.formModel.reset();
          this.toastr.success('New user created! you can now log in', 'Register Process Successful');
          this.router.navigateByUrl('/user/login');
        } else {
          this.toastr.error('User Name is already taken!', 'Register Process failed');
        }
      },
      err => {
        this.toastr.error(err.Description, 'Register failed, Server is down at the moment');
      }
    );
    }
    catch (e) { 
      this.toastr.error(e, 'Register failed, Server is down at the moment');
      console.log(e);
    }
  }

}