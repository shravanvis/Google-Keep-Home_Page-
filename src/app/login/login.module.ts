import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
              CommonModule,
              FormsModule
           ],
  declarations: [LoginComponent]
})


export class LoginModule { }
