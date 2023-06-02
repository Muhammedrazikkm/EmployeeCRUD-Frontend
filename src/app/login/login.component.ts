import { Component , OnInit} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })
  get username(){
    return this.loginForm.get("username")
  }
  get password(){
    return this.loginForm.get("password")
  }
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  authenticate(){
    console.log(this.loginForm.value);
    this.router.navigateByUrl("index")
    
  }

}
