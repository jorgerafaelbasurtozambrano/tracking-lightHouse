import { Injectable } from '@angular/core';
import { server } from "../../environments/environment";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShipmentTrackingService {

  constructor(private http:HttpClient) { }
  private _header = new HttpHeaders().set('Content-Type', 'application/raw');
  obtenerListaSeguimiento(){
    return new Promise((resolve, reject) => {
      this.http.post(server+"/users/shipment-tracking",{session:{userId:localStorage.getItem("UserID")||'0'}})
                .subscribe(res=>{
                  resolve(res);
                },(err)=>{
                  return EMPTY;
                });
    });
  }

  ingresarSeguimiento(BL:any,Naviera:any,Tipo:any,Contenedores:[any]){
    var cabecera:any ={
      "Input": BL,
      "InputType": Tipo,
      "ShippingCompanyID": Naviera,
      "session":{
        "userID":localStorage.getItem("UserID")||'0'
      },
      "ContainerDetails":[
      ]
    };
    Contenedores.forEach(function(value, key){
      if(value!=""){
        cabecera['ContainerDetails'].push(
          {
            "NoContainer": value,
             "Movements":[
                 {
                      "OrderID": 0,
                      "Activity": "-",
                      "ActivityLocation": "-",
                      "ActivityDate": "0",
                      "ActivityTime": "00:00"
                 }
             ]
          }
        );
      }
    });
    return new Promise((resolve, reject) => {
      this.http.post(server+"/shipment-tracking",cabecera)
                .subscribe(res=>{
                  resolve(res);
                },(err)=>{
                  return EMPTY;
                });
    });
  }
}
