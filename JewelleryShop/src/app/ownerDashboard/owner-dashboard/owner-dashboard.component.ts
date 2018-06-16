import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../../login/services/data-service.service";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss']
})
export class OwnerDashboardComponent implements OnInit {
  private params: any;

  agInit(params: any): void {
      this.params = params;
  }
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
