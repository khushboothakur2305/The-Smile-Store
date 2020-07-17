import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from "./toolbar/header/header.component";
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavComponent } from './toolbar/sidenav/sidenav.component';
import {MatListModule} from '@angular/material/list';
import { NgImageSliderModule } from 'ng-image-slider';
import { GalleryComponent } from './imgslider/gallery/gallery.component';
import { MobGalleryComponent } from './imgslider/mob-gallery/mob-gallery.component';
import { CosmeticDentistryComponent } from './treatment/cosmetic-dentistry/cosmetic-dentistry.component';
import { CrownandbridgesComponent } from './treatment/crownandbridges/crownandbridges.component';
import { DentalImplantsComponent } from './treatment/dental-implants/dental-implants.component';
import { DentaljewelleryComponent } from './treatment/dentaljewellery/dentaljewellery.component';
import { FullMouthRehabilitationComponent } from './treatment/full-mouth-rehabilitation/full-mouth-rehabilitation.component';
import { ImpactedteethComponent } from './treatment/impactedteeth/impactedteeth.component';
import { InvisalignComponent } from './treatment/invisalign/invisalign.component';
import { OrthodonticsComponent } from './treatment/orthodontics/orthodontics.component';
import { PatienteducationComponent } from './treatment/patienteducation/patienteducation.component';
import { PediatricdentistryComponent } from './treatment/pediatricdentistry/pediatricdentistry.component';
import { PeriodonticsComponent } from './treatment/periodontics/periodontics.component';
import { PorcelainLaminateVeneersComponent } from './treatment/porcelain-laminate-veneers/porcelain-laminate-veneers.component';
import { RootcanalComponent } from './treatment/rootcanal/rootcanal.component';
import { SmileDesigningComponent } from './treatment/smile-designing/smile-designing.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SidenavComponent,
    GalleryComponent,
    MobGalleryComponent,
    CosmeticDentistryComponent,
    CrownandbridgesComponent,
    DentalImplantsComponent,
    DentaljewelleryComponent,
    FullMouthRehabilitationComponent,
    ImpactedteethComponent,
    InvisalignComponent,
    OrthodonticsComponent,
    PatienteducationComponent,
    PediatricdentistryComponent,
    PeriodonticsComponent,
    PorcelainLaminateVeneersComponent,
    RootcanalComponent,
    SmileDesigningComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
