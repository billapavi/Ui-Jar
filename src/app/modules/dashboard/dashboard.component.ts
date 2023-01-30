import { Component } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  status: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "A1", name: 'Hydrogen', weight: "Y", status: "Open",symbol: '777,AE323'},
  {position: "A12", name: 'Helium', weight: "Y", status: "Open" , symbol: '777,AE423'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'status','symbol'];
  dataSource = ELEMENT_DATA;
}


