import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  baseApiUrl: string = "https://localhost:7071/";
  constructor(private http: HttpClient) {  }

  getAllEmployees(): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.baseApiUrl + 'api/employees');
  }
  addEmployee(addEmployeeRequest: Employe):Observable<Employe>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employe>(this.baseApiUrl + 'api/employees',addEmployeeRequest);
  }
  getEmployee(id: string): Observable<Employe>{
    return this.http.get<Employe>(this.baseApiUrl + 'api/employees/' + id);
  }
  updateEmployee(id:string, updateEmployeeRequest:Employe):Observable<Employe>{
    return this.http.put<Employe>(this.baseApiUrl + 'api/employees/' + id, updateEmployeeRequest);
  }
  deleteEmployee(id: string): Observable<Employe>{
    return this.http.delete<Employe>(this.baseApiUrl + 'api/employees/' + id);
  }
}
