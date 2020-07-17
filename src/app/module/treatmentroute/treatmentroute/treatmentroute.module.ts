import { TreatmentPageComponent } from './../../../treatment/treatment-page/treatment-page.component';
import { DentalImplantsComponent } from './../../../treatment/dental-implants/dental-implants.component';
import { CosmeticDentistryComponent } from './../../../treatment/cosmetic-dentistry/cosmetic-dentistry.component';
import { FullMouthRehabilitationComponent } from './../../../treatment/full-mouth-rehabilitation/full-mouth-rehabilitation.component';
import { InvisalignComponent } from './../../../treatment/invisalign/invisalign.component';
import { PorcelainLaminateVeneersComponent } from './../../../treatment/porcelain-laminate-veneers/porcelain-laminate-veneers.component';
import { SmileDesigningComponent } from './../../../treatment/smile-designing/smile-designing.component';
import { ToothColouredFillingComponent } from './../../../treatment/tooth-coloured-filling/tooth-coloured-filling.component';
import { ToothWhiteningComponent } from './../../../treatment/tooth-whitening/tooth-whitening.component';
import { DentaljewelleryComponent } from './../../../treatment/dentaljewellery/dentaljewellery.component';
import { ImpactedteethComponent } from './../../../treatment/impactedteeth/impactedteeth.component';
import { CrownandbridgesComponent } from './../../../treatment/crownandbridges/crownandbridges.component';
import { OrthodonticsComponent } from './../../../treatment/orthodontics/orthodontics.component';
import { PatienteducationComponent } from './../../../treatment/patienteducation/patienteducation.component';
import { PediatricdentistryComponent } from './../../../treatment/pediatricdentistry/pediatricdentistry.component';
import { PeriodonticsComponent } from './../../../treatment/periodontics/periodontics.component';
import { RootcanalComponent } from './../../../treatment/rootcanal/rootcanal.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const route: Routes = [
  { path: 'TreatmentPage', component: TreatmentPageComponent },

  { path: 'DentalImplants', component: DentalImplantsComponent },
  { path: 'CosmeticDentistry', component: CosmeticDentistryComponent },
  {
    path: 'FullMouthRehabilitation',
    component: FullMouthRehabilitationComponent,
  },
  { path: 'Invisalign', component: InvisalignComponent },
  {
    path: 'PorcelainLaminateVeneers',
    component: PorcelainLaminateVeneersComponent,
  },
  { path: 'SmileDesigning', component: SmileDesigningComponent },
  { path: 'ToothColouredFilling', component: ToothColouredFillingComponent },
  { path: 'ToothWhitening', component: ToothWhiteningComponent },
  { path: 'Dentaljewellery', component: DentaljewelleryComponent },
  { path: 'Crownandbridges', component: CrownandbridgesComponent },
  { path: 'Impactedteeth', component: ImpactedteethComponent },
  { path: 'Orthodontics', component: OrthodonticsComponent },
  { path: 'Patienteducation', component: PatienteducationComponent },
  { path: 'Pediatricdentistry', component: PediatricdentistryComponent },
  { path: 'Periodontics', component: PeriodonticsComponent },
  { path: 'Rootcanal', component: RootcanalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports:[RouterModule]
})
export class TreatmentrouteModule {}
