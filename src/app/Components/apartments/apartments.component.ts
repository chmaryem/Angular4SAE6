import { Component } from '@angular/core';
import { Apartment } from 'src/app/Models/apartement';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  title:string = "Liste des appartements"
  selectedApartment: Apartment = new Apartment();
  hide: boolean = true;
  searchText:string = "";

  apartments: Apartment[] = [
  {
    id: 1,
    apartNum: 101,
    floorNum: 1,
    surface: 120,
    terrace: true,
    surfaceterrace: 20,
    category: "Luxury",
    ResidenceId: 1
  },
  {
    id: 2,
    apartNum: 102,
    floorNum: 2,
    surface: 100,
    terrace: false,
    surfaceterrace: 0,
    category: "Standard",
    ResidenceId: 1
  },
  {
    id: 3,
    apartNum: 201,
    floorNum: 3,
    surface: 90,
    terrace: true,
    surfaceterrace: 10,
    category: "Economy",
    ResidenceId: 2
  },
  {
    id: 4,
    apartNum: 301,
    floorNum: 3,
    surface: 140,
    terrace: true,
    surfaceterrace: 30,
    category: "Luxury",
    ResidenceId: 3
  }
];
    showLocation(r: Apartment){
      this.hide = false;
      this.selectedApartment = r;
    }

    filterByCategoryOrSurface() {
      return this.apartments.filter((a) =>
        a.category.toLowerCase().includes(this.searchText.toLowerCase()) ||
        a.surface.toString().includes(this.searchText)
      );
    }
    listFavoris: Apartment[] = []

    addToFavoris(r:Apartment){
      let index = this.listFavoris.findIndex((p)=>p.id == r.id);
      if(index == -1){
        this.listFavoris.push(r)
      }
      else {
        this.listFavoris.splice(index,1)
      }
    }

    isFavoris(r: Apartment){
      return this.listFavoris.some((p)=>p.id == r.id)
    }
}
