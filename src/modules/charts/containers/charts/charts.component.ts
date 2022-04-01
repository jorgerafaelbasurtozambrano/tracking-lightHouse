import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts.component.html',
    styleUrls: ['charts.component.scss'],
})
export class ChartsComponent implements OnInit {
    powers = [
        {naviera:'OCEAN NETWORK EXPRESS (ONE)',id:1},
        {naviera:'MEDITERRANEAN SHIPPING COMPANY (MSC)',id:3}
    ];
    constructor() {}
    ngOnInit() {}
}
