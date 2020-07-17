import { ContactService } from './service/contact.service';
import { MaterialmoduleModule } from './module/materialmodule/materialmodule.module';
import { SharedmoduleModule } from './module/sharedmodule/sharedmodule/sharedmodule.module';
import { TreatementModule } from './module/treatment/treatment/treatment.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ContactusComponent } from './contactus/contactus.component';
import { SidenavComponent } from './toolbar/sidenav/sidenav.component';
import { HeaderComponent } from './toolbar/header/header.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './imgslider/gallery/gallery.component';
import { MobGalleryComponent } from './imgslider/mob-gallery/mob-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { AboutdeveloperComponent } from './aboutdeveloper/aboutdeveloper.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { EnquirylistComponent } from './admin/enquirylist/enquirylist.component';
import { ContactlistComponent } from './admin/contactlist/contactlist.component';
import { FetchlistComponent } from './admin/fetchlist/fetchlist.component';
import { AdminloginportalComponent } from './adminloginportal/adminloginportal.component';
import { PatiententryComponent } from './patient/patiententry/patiententry.component';
import { CreateuserComponent } from './admin/createuser/createuser.component';
import { PatientDetialsComponent } from './patient/patient-detials/patient-detials.component';
import { PatientComponent } from './patient/patient/patient.component';
import { EditpaitentComponent } from './patient/editpaitent/editpaitent.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    MobGalleryComponent,
    FooterComponent,
    AboutdeveloperComponent,
    EnquirylistComponent,
    ContactlistComponent,
    FetchlistComponent,
    AdminloginportalComponent,
    PatiententryComponent,
    CreateuserComponent,
    PatientDetialsComponent,
    PatientComponent,
    EditpaitentComponent,

  ],
  imports: [
    SharedmoduleModule,
    TreatementModule,
    MaterialmoduleModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgImageSliderModule,
    AngularFireAuthModule,
    AngularFireAuthModule,
    ScrollingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
