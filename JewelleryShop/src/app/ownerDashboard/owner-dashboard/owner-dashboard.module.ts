import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerDashboardComponent } from './owner-dashboard.component';
import {AgGridModule} from "ag-grid-angular";
import {RedComponentComponent} from '../red-component/red-component.component'

@NgModule({
  imports: [
    CommonModule,
    AgGridModule
  ],
  declarations: [OwnerDashboardComponent,RedComponentComponent],
  exports:[OwnerDashboardComponent],
})
export class OwnerDashboardModule { }
