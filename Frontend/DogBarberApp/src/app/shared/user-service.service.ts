import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  public loggedUser = null;
  readonly BaseURI = environment.apiEndpoint;

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    FirstName: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required],
    }, {validator: this.comparePasswords })
  });

  formPasswordModel = this.fb.group({
    CurrentPassword: ['', [Validators.required, Validators.minLength(4)]],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required],
    }, {validator: this.comparePasswords }),
  });

  comparePasswords(fb: FormGroup) {
    const confirmPasswordsCtrl = fb.get('ConfirmPassword');

    if (confirmPasswordsCtrl.errors == null || 'passwordMismatch' in confirmPasswordsCtrl.errors) {
      if (fb.get('Password').value !== confirmPasswordsCtrl.value) {
        confirmPasswordsCtrl.setErrors({passwordMismatch: true});
      } else {
        confirmPasswordsCtrl.setErrors(null);
      }
    }
  }
  changePassword() {

    const body = {
      CurrentPassword: this.formPasswordModel.value.CurrentPassword,
      Password: this.formPasswordModel.value.Passwords.Password,
      ConfirmPassword: this.formPasswordModel.value.Passwords.ConfirmPassword
    };

    return this.http.post(this.BaseURI + '/AppUser/ChangePassword', body);

  }
  register() {
    const body = {
      UserName: this.formModel.value.UserName,
      FirstName: this.formModel.value.FirstName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/User/Register', body);
  }

  login(formData: any) {
    return this.http.post(this.BaseURI + '/User/Login', formData);
  }

  setCurrentUser(user: any){
  localStorage.setItem('currentUser', JSON.stringify(user));
  localStorage.setItem('token', user.Token);
  }

  getCurrentUser(){ 
  return JSON.parse(localStorage.getItem('currentUser'));
  }

  getUserToken() {
    return localStorage.getItem('token');
  }

  removeCurrentUser() { 
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');

  }


}
