import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employess/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddEmployeeeComponent } from './employees/add-employeee/add-employeee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeComponent } from './employees/edit-employe/edit-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    AddEmployeeeComponent,
    EditEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule                        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
