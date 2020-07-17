import { EditpaitentComponent } from './patient/editpaitent/editpaitent.component';
import { PatientComponent } from './patient/patient/patient.component';

import { AdminGuard } from './guard/admin/admin.guard';
import { AdminloginportalComponent } from './adminloginportal/adminloginportal.component';
import { FetchlistComponent } from './admin/fetchlist/fetchlist.component';

import { AboutdeveloperComponent } from './aboutdeveloper/aboutdeveloper.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

import { AboutusComponent } from './aboutus/aboutus.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //home
  { path: 'Home', component: HomeComponent },

  //aboutus
  { path: 'aboutus', component: AboutusComponent },
  //contactus
  { path: 'contactus', component: ContactusComponent },
  //aboutdev
  { path: 'aboutdeveloper', component: AboutdeveloperComponent },
  //Adminlogin
  {
    path: 'adminlist',
    component: FetchlistComponent,
    canActivate: [AdminGuard],
  },
  { path: 'adminloginportal', component: AdminloginportalComponent },
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [AdminGuard],
  },
  {path:'editpatient',component:EditpaitentComponent}
  //createadmin
  // {path:'createuser',component:CreateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminGuard],
})
export class AppRoutingModule {}
