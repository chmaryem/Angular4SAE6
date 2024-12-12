import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ResidencesComponent } from './Components/residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';

import { AddResidenceComponent } from './Components/residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './Components/apartments/apartments.component';
import { AddApartementComponent } from './Components/apartments/add-apartement/add-apartement.component';
import { ApartementByResidenceComponent } from './Components/apartments/apartement-by-residence/apartement-by-residence.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResidencesComponent,
    NotFoundComponent,
    FooterComponent,
    ResidenceDetailsComponent,

    AddResidenceComponent,
    ApartmentsComponent,
    AddApartementComponent,
    ApartementByResidenceComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
