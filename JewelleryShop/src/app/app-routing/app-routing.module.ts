import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../login/login/login.component';
import { OwnerDashboardComponent } from '../ownerDashboard/owner-dashboard/owner-dashboard.component';


const routes: Routes = [
  { path: 'ownerDashboard', component: OwnerDashboardComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
  ];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }
