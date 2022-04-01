import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toastr: ToastrService) { }
  showSuccess(titulo:any,mensaje:any) {
    this.toastr.success(mensaje, titulo,{
      closeButton:true,
      "positionClass": "toast-bottom-right",
    });
  }
  error(titulo:any,mensaje:any) {
    this.toastr.error(mensaje, titulo,{
      closeButton:true,
      "positionClass": "toast-bottom-right",
    });
  }
}
