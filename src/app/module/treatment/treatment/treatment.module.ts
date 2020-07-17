import { TreatmentrouteModule } from './../../treatmentroute/treatmentroute/treatmentroute.module';
import { EnquiryService } from './../../../service/enquiry.service';
import { DialogComponent } from './../../../Enquiry/dialog/dialog.component';
import { TreatmentPageComponent } from './../../../treatment/treatment-page/treatment-page.component';
import { RootcanalComponent } from './../../../treatment/rootcanal/rootcanal.component';
import { PeriodonticsComponent } from './../../../treatment/periodontics/periodontics.component';
import { PediatricdentistryComponent } from './../../../treatment/pediatricdentistry/pediatricdentistry.component';
import { PatienteducationComponent } from './../../../treatment/patienteducation/patienteducation.component';
import { OrthodonticsComponent } from './../../../treatment/orthodontics/orthodontics.component';
import { ImpactedteethComponent } from './../../../treatment/impactedteeth/impactedteeth.component';
import { CrownandbridgesComponent } from './../../../treatment/crownandbridges/crownandbridges.component';
import { DentaljewelleryComponent } from './../../../treatment/dentaljewellery/dentaljewellery.component';
import { ToothWhiteningComponent } from './../../../treatment/tooth-whitening/tooth-whitening.component';
import { LogoImageComponent } from './../../../logo-image/logo-image.component';
import { ToothColouredFillingComponent } from './../../../treatment/tooth-coloured-filling/tooth-coloured-filling.component';
import { SmileDesigningComponent } from './../../../treatment/smile-designing/smile-designing.component';
import { PorcelainLaminateVeneersComponent } from './../../../treatment/porcelain-laminate-veneers/porcelain-laminate-veneers.component';
import { InvisalignComponent } from './../../../treatment/invisalign/invisalign.component';
import { FullMouthRehabilitationComponent } from './../../../treatment/full-mouth-rehabilitation/full-mouth-rehabilitation.component';
import { CosmeticDentistryComponent } from './../../../treatment/cosmetic-dentistry/cosmetic-dentistry.component';
import { SharedmoduleModule } from './../../sharedmodule/sharedmodule/sharedmodule.module';
import { EnquirybuttonComponent } from './../../../Enquiry/enquirybutton/enquirybutton.component';
import { DentalImplantsComponent } from './../../../treatment/dental-implants/dental-implants.component';

import { MaterialmoduleModule } from './../../materialmodule/materialmodule.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DentalImplantsComponent,
    EnquirybuttonComponent,
    CosmeticDentistryComponent,
    FullMouthRehabilitationComponent,
    PorcelainLaminateVeneersComponent,
    InvisalignComponent,
    SmileDesigningComponent,
    ToothColouredFillingComponent,
    LogoImageComponent,
    ToothWhiteningComponent,
    DentaljewelleryComponent,
    CrownandbridgesComponent,
    ImpactedteethComponent,
    PatienteducationComponent,
    OrthodonticsComponent,
    PediatricdentistryComponent,
    PeriodonticsComponent,
    RootcanalComponent,
    TreatmentPageComponent,
    DialogComponent,
  ],
  imports: [CommonModule, SharedmoduleModule, MaterialmoduleModule,TreatmentrouteModule],
  providers:[EnquiryService]
})
export class TreatementModule {}
