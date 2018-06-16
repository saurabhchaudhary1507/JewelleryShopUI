import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginModule} from './login/login/login.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { OwnerDashboardModule } from './ownerDashboard/owner-dashboard/owner-dashboard.module';
import {AgGridModule} from "ag-grid-angular";
import {RedComponentComponent} from './ownerDashboard/red-component/red-component.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    OwnerDashboardModule,
    AppRoutingModule, 
    AgGridModule.withComponents(
      [RedComponentComponent,RedComponentComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
