import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';

import { Observable, EMPTY, throwError, of } from 'rxjs';
import { catchError,filter ,tap} from 'rxjs/operators';
import { AlertasService } from '../alertas.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioInterceptorService {

  constructor(private alerta: AlertasService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
        } else {
          console.log(error)
          if(error.status == 401){
            if(!error.url?.includes('login')){
                this.alerta.error("Error","Sesion Expirada");
            }else{
              this.alerta.error("Error","Credenciales Incorrectas");
            }
          }
        }
        return EMPTY;
      })
    );
  }
}
