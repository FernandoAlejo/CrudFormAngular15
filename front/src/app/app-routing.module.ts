import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employess/employees-list/employees-list.component';
import { AddEmployeeeComponent } from './employees/add-employeee/add-employeee.component';
import { EditEmployeComponent } from './employees/edit-employe/edit-employe.component';

const routes: Routes = [
  {
    path: '', component: EmployeesListComponent
  },
  {
    path: 'employees', component: EmployeesListComponent
  },
  {
    path: 'employees/add', component: AddEmployeeeComponent
  },
  {
    path: 'employees/edit/:id', component: EditEmployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
