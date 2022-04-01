import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AlertasService } from '@app/services/alertas.service';
import { ShipmentTrackingService } from '@app/services/shipment-tracking.service';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
export interface Fruit {
  name: string;
}
@Component({
  selector: 'sb-nuevo-seguimiento',
  templateUrl: './nuevo-seguimiento.component.html',
  styleUrls: ['./nuevo-seguimiento.component.scss']
})
export class NuevoSeguimientoComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.input.value='';
  }
  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  constructor(private alerta:AlertasService,private ShipmentTracking:ShipmentTrackingService) {
    this.formSeguimiento = new FormGroup({
      formSeguimientoBL: new FormControl('', [Validators.required]),
      formSeguimientoNaviera: new FormControl('', [Validators.required]),
      formSeguimientoContenedor: new FormControl('', [Validators.required]),
      
    });
   }
   formSeguimiento: FormGroup;
   get formLogin_BL() {
    return this.formSeguimiento.get("formSeguimientoBL");
  }
  get formSeguimiento_Naviera() {
    return this.formSeguimiento.get("formSeguimientoNaviera");
  }
  get formSeguimiento_Tipo() {
    return this.formSeguimiento.get("formSeguimientoContenedor");
  }
  ngOnInit(): void {
  }
  isHidden:boolean=true;
  limpiarInput(){
    this.formLogin_BL?.reset();
    this.formSeguimiento_Naviera?.setValue("0");
  }
  onChange(deviceValue:any) {
    if(deviceValue==1){
      this.isHidden=false;
    }else{
      this.isHidden=true;
    }
}
  async save(){
    if (this.formSeguimiento.valid) {
      var respuesta:any;
      var contenedores:[string]=[''];
      this.fruits.forEach(function(value){
        contenedores.push(value.name);
      });
      if(this.formSeguimiento_Tipo?.value==0){
        contenedores = [this.formLogin_BL?.value];
      }
      respuesta =  await this.ShipmentTracking.ingresarSeguimiento(this.formLogin_BL?.value,this.formSeguimiento_Naviera?.value,this.formSeguimiento_Tipo?.value,contenedores);
      if(respuesta['status'] == 201){
        this.alerta.showSuccess("",respuesta['message']);
        this.limpiarInput();
      }
    }
    else{
      this.alerta.error("Campos Requeridos","Ingresar valor en todos los campos");
    }
  }
}
