import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { UserService } from '../shared/user-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
   route: ActivatedRouteSnapshot;

   constructor(private router: Router, private userService: UserService) {}
   canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean {
       if (localStorage.getItem('token') != null) {
         return true;
       } else {
         this.router.navigate(['/user/login']);
         return false;
       }
     }
}
