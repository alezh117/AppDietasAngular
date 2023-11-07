import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userStoreService } from '../store/userStore.Service';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpInterceptor {

  constructor(private tokenService: userStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {
    
    let request = req;

    if( this.tokenService.ensureToken() ){
      const token:string = this.tokenService.userToken;
    
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request);
    
  }
}