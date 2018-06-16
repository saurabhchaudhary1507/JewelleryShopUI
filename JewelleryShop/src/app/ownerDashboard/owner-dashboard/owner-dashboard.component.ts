import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../../login/services/data-service.service";
import {GridOptions} from "ag-grid";
import {RedComponentComponent} from "../red-component/red-component.component";
@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss']
})
export class OwnerDashboardComponent implements OnInit {
  private gridOptions: GridOptions;
  message:string;
  constructor(private data: DataServiceService) {
    this.gridOptions = <GridOptions>{}; 
    this.gridOptions.columnDefs = [
      {
          headerName: "ID",
          field: "id",
          width: 100
      },
      {
          headerName: "Value",
          field: "value",
          cellRendererFramework: RedComponentComponent,
          width: 100
      },

  ];

  this.gridOptions.rowData = [
    {id: 5, value: 10},
    {id: 10, value: 15},
    {id: 15, value: 20}
]
    
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message =>{this.message = message
    console.log(this.message);
    } )
  }

}
