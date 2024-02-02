import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.scss']
})
export class EditEmployeComponent implements OnInit{

  employeeDetails: Employe = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  constructor(private route: ActivatedRoute, private employeeServece: EmployeesService,
    private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeServece.getEmployee(id)
          .subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          })
        }
      }
    })
  }
  updateEmployee(){
    this.employeeServece.updateEmployee(this.employeeDetails.id,this.employeeDetails)
    .subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      }
    })
  }
  deleteEmployee(id:string){
    this.employeeServece.deleteEmployee(id)
    .subscribe({
      next: (response) => {
      this.router.navigate(['employees']);
      }
    })
  }
}
