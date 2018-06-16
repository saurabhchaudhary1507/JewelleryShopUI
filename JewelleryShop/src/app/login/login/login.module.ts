import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [LoginComponent],
  exports:[LoginComponent],
  providers:[LoginService]
})
export class LoginModule { }
