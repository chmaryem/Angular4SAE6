



import { Residence } from './Models/residence';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Components/residences/residences.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Components/residences/add-residence/add-residence.component';

import { ApartementByResidenceComponent } from './Components/apartments/apartement-by-residence/apartement-by-residence.component';
import { AddApartementComponent } from './Components/apartments/add-apartement/add-apartement.component';
import { ApartmentsComponent } from './Components/apartments/apartments.component';



const routes: Routes = [
  {path: 'residences',component:ResidencesComponent},
  {path:'',redirectTo:'residences',pathMatch:'full'},//yaamel comparaioson complete bch yaaref anehi yexicuti
  {path:'details/:id',component:ResidenceDetailsComponent},
  {path: 'residence/add', component: AddResidenceComponent},
  { path: 'apartments', component:ApartmentsComponent },
  { path: 'apartments/residence/:id', component:ApartementByResidenceComponent },
  { path: 'add-apartment', component: AddApartementComponent },

  {path:'**',component:NotFoundComponent}
]; //on va metre les paths de chaque page

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
