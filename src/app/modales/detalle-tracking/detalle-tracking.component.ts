import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'sb-detalle-tracking',
  templateUrl: './detalle-tracking.component.html',
  styleUrls: ['./detalle-tracking.component.scss']
})
export class DetalleTrackingComponent implements OnInit,AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<any>();

  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    if(this.data.InputType==0){
      this.data.InputType = "BL";
    }else{
      this.data.InputType = "CONTENEDOR"
    }
    this.data.InputType+=" - "+this.data.Input;
  }
}