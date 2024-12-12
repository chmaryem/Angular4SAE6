import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residence : FormGroup = new FormGroup({
   // name :  new FormControl({value:'residence name', disabled:true}, []),
   name :  new FormControl("",[Validators.required, Validators.minLength(3)]),
   adress : new FormControl("", [Validators.required]),
   /*address : new FormGroup({
    street : new FormControl('',[]),
    city : new FormControl('',[])
   }),*/
    image : new FormControl("", []),
    status :  new FormControl("Disponible", [])
  })
get name(){
  return this.residence.get('name');
}
get adress(){
  return this.residence.get('adress');
}
get image(){
  return this.residence.get('image');
}

  add(){
    console.log(this.residence.value);  //ki tebda wahda disabled mayafichihech
    console.log(this.residence.getRawValue()); //get tafichili kol chy
    console.log(this.residence.patchValue({
      name: 'test'
    }));
    console.log(this.residence.reset());

  }
}
