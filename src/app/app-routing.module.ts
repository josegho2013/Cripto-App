import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component:LoginComponent  ,
  },
  {
    path: 'login',
    component: DetailComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
 
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: `detail/:id`,
    component: DetailComponent,
  },
 ];



@NgModule({
  declarations: [],
  // imports: [
  //   // CommonModule
  // ]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
