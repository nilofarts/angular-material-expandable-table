import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ScheduleAndProduction } from './model/schedule-and-production';

import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { ProductionChargingService } from './production-charging.service';
import { Schedule } from './model/schedule';
import { Product } from './model/product';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-schedule-and-production-charging',
  templateUrl: './schedule-and-production-charging.component.html',

  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ScheduleAndProductionChargingComponent implements OnInit {
  scheduleArray: Schedule[];
  productArray: Product[];
  scheduleAndProductionArray: ScheduleAndProduction[] = [];
  arrayOfCheckbox: any[] = [];
  table1: boolean;
  table2: boolean;

  constructor(private router: Router,

    private productionChargingService: ProductionChargingService,
    private http: HttpClient, ) {

  }
  selectedRowforTable1: number;
  selectedRow: number = 1;
  selectedBatchNo: number;
  selectedProdNo: number;
  selectedIndex: number;
  workCenter: any;
  selectedWorkcenter: any;
  displayMe: boolean;
  displayMeLevel2: any[][] = [[]];
  clonedColumns: { column: String, status: boolean }[] = [];
  showButton: boolean = false;

  selectIndexTable2: string = "00";
  disabledbutton: boolean = false
  selectedIndexForDropDown: number;

  displayLevel2: any[] = [];
  displayLevel3: any[] = [];
  displayLevel4: any[] = [];
  selectedRowForDragNDropTable: number = 10000001;

  workcenterArray: any[] = ['VCRM1', 'VCRM3', 'VCRM4', 'VHRS1', 'VPICK1'];

  workcenterSelected: string;
  crmWorkcenter: boolean = false;
  cclWorkcenter: boolean = false;

  checked: boolean = false;

  // dataSource = new UserDataSource(this.productionChargingService);
  dataSource = new MatTableDataSource<Schedule>();
  dataSource1 = new MatTableDataSource<Product>();
  displayedColumns: string[] = ['scheduleNo', 'scheduleWeek', 'status', 'ppcRemark'];
  displayedColumns1: string[] = ['productOrder', 'soItem', 'customerName', 'orderWeight', 'balanceToProduce', 'ppcRemark'];
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource2 = ELEMENT_DATA;
  expandedElement: Schedule | null;
  ngOnInit() {
    // this.getData();
    this.scheduleArray = [];
    this.productArray = [];
    //to get table1 data
    this.productionChargingService.getAllProductCharging().subscribe((productionCharging) => {
      this.scheduleArray = productionCharging;
      this.dataSource.data = this.scheduleArray;
    });
    this.selectedIndex;

  }
  //to get table 2 data(child of table1)
  onRowClick(element: any) {

    this.productionChargingService.getProductChargingById(element.scheduleId).subscribe((productionCharging) => {
      this.dataSource1.data = productionCharging.product;
      this.dataSource1.data.forEach(element => {

      });
    });


  }
  onRowClick2(element: any) {


    this.displayMe = true;

  }
  schedule: Schedule;

  workcenter(value) {
    this.workcenterSelected = value;

  }
  vcrm: boolean = false;
  onSubmit() {
    if (this.workcenterSelected == "VCRM1" ||
      this.workcenterSelected == "VCRM2" ||
      this.workcenterSelected == "VCRM3" ||
      this.workcenterSelected == "VCRM4") {
      this.vcrm = true;
    }
  }

}

///for table 3 data
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
