import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectByUserComponent} from "./project-by-user/project-by-user.component";
import {HomeComponent} from "./home/home.component";
import {LangingPageComponent} from "./langing-page/langing-page.component";
import {ProjectsComponent} from "./projects/projects.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path:'project/:userId',component:ProjectByUserComponent},
  {path:'',component:HomeComponent},
  {path:'welcome',component:LangingPageComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
