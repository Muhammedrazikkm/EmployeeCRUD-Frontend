import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getAllEmployees(){
    return fetch("http://127.0.0.1:8000/api/employees/")
  }
  getEmpployeeDetail(id:any){
    return fetch(`http://127.0.0.1:8000/api/employees/${id}/`)
  }
  
  createEmployee(data:any){
    let options={
      "method":"post",
      "body":JSON.stringify(data),
      "headers":{
        "Content-type":"application/json; charset=UTF-8"
      }
    }
    return fetch("http://127.0.0.1:8000/api/employees/",options)

  }
  deleteEmployee(id:any){
    let options={
      "method":"delete",
      "headers":{
        "Content-type":"application/json; charset=UTF-8"
      }
    }
    return fetch(`http://127.0.0.1:8000/api/employees/${id}/`,options)
  }
  editEmployee(data:any,id:any){
    let options={
      "method":"put",
      "body":JSON.stringify(data),
      "headers":{
        "Content-type":"application/json; charset=UTF-8"
      }
    }
    return fetch(`http://127.0.0.1:8000/api/employees/${id}/`,options)
    

  }

}
