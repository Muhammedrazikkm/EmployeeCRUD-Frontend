import { Component ,OnInit} from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  employees:any
  constructor(private service:EmployeeService,private router:Router){

  }
  ngOnInit(): void {
    this.service.getAllEmployees().then(res=>res.json()).then(data=>this.employees=data)
  }
  redirecttoEmployeDetail(id:any){
    this.router.navigateByUrl(`employee/${id}`)
  }
  removeEmployye(id:any){
    this.service.deleteEmployee(id).then(res=>this.ngOnInit())
  }
  


}
