import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employeee',
  templateUrl: './add-employeee.component.html',
  styleUrls: ['./add-employeee.component.scss']
})
export class AddEmployeeeComponent implements OnInit{

  addEmployeeRequest: Employe = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };
  constructor(private employeeService: EmployeesService, private router: Router){}
  ngOnInit(): void {
    
  }
  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=> {
        this.router.navigate(['employees']);
      }
    })
  }
}
