import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { Country } from '@modules/tables/models';
import { CountryService } from '@modules/tables/services';
import { Observable } from 'rxjs';
import { ShipmentTrackingService } from '@app/services/shipment-tracking.service';
import {MatDialog} from '@angular/material/dialog';
import { DetalleTrackingComponent } from '@app/modales/detalle-tracking/detalle-tracking.component';
@Component({
    selector: 'sb-ng-bootstrap-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ng-bootstrap-table.component.html',
    styleUrls: ['ng-bootstrap-table.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit {
    @Input() pageSize = 4;

    countries$!: Observable<Country[]>;
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        public countryService: CountryService,
        private changeDetectorRef: ChangeDetectorRef,
        private ShipmentTrackingServices:ShipmentTrackingService,
        public dialog: MatDialog
    ) {}
    listaSeguimiento:any;
    async listadoSeguimiento() {
        var respuesta:any;
        respuesta = await this.ShipmentTrackingServices.obtenerListaSeguimiento();
        this.listaSeguimiento = respuesta['UserShipmentDetails'];
    }
    ngOnInit() {
        this.listadoSeguimiento();
    }
    openDialog(data_:any) {
        //console.log(data_)
        const dialogRef = this.dialog.open(DetalleTrackingComponent,{
            width:"60%",
            height:"70%",
            data:data_
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.countryService.sortColumn = column;
        this.countryService.sortDirection = direction;
        //this.changeDetectorRef.detectChanges();
    }
}
