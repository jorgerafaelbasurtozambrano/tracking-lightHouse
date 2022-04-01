import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ShipmentTrackingService } from '@app/services/shipment-tracking.service';
import {MatDialog} from '@angular/material/dialog';
import { DetalleTrackingComponent } from '@app/modales/detalle-tracking/detalle-tracking.component';

@Component({
  selector: 'sb-lista-seguimiento',
  templateUrl: './lista-seguimiento.component.html',
  styleUrls: ['./lista-seguimiento.component.scss']
})
export class ListaSeguimientoComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','detalle'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;

  constructor(private ShipmentTracking:ShipmentTrackingService,public dialog: MatDialog) { 
  }
  ngOnInit(): void {
  }
  async obtenerListaSeguimiento(){
    var respuesta:any;
    respuesta = await this.ShipmentTracking.obtenerListaSeguimiento();
    this.dataSource.data = respuesta['UserShipmentDetails'];
  }
  ngAfterViewInit() {
    this.obtenerListaSeguimiento();
    this.dataSource.paginator = this.paginator;
  }
  detalle(data_:any){
    const dialogRef = this.dialog.open(DetalleTrackingComponent,{
      width:"80%",
      height:"70%",
      data:data_
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }
}
