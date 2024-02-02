import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit{

  employees:Employe[] = [
    // {
    //   id: '1',
    //   name: 'Alejo',
    //   email: 'jaja@email.com',
    //   phone: 12345678,
    //   salary: 1400,
    //   department: 'Sales'
    // },
    // {
    //   id: '2',
    //   name: 'Domy',
    //   email: 'domy@email.com',
    //   phone: 9876543,
    //   salary: 1500,
    //   department: 'Layer'
    // },
    // {
    //   id: '3',
    //   name: 'Gianna',
    //   email: 'giannaa@email.com',
    //   phone: 234565456,
    //   salary: 1900,
    //   department: 'Managment'
    // }
  ];
  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
