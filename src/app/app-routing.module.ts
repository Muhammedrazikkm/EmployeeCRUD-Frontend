import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistartionComponent } from './registartion/registartion.component';

const routes: Routes = [
  {path:"register",component:RegistartionComponent},
  {path:"index",component:HomeComponent},
  {path:"employee/add",component:EmpcreateComponent},
  {path:"employee/:id",component:EmpdetailComponent},
  {path:"employee-edit/:id",component:EmpeditComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
