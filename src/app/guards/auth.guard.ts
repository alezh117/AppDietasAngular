import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { userStoreService } from '../services/store/userStore.Service';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private tokenService: userStoreService,
    public router: Router) {}

  canActivate(): boolean {
    
    const validate = this.tokenService.getToken();

    if ( undefined === validate ){
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}