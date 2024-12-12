import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartement',
  templateUrl: './add-apartement.component.html',
  styleUrls: ['./add-apartement.component.css']
})
export class AddApartementComponent {
  apartement: FormGroup = new FormGroup({
    apartNum: new FormControl("", [Validators.required, Validators.min(1)]),
    floorNum: new FormControl("", [Validators.required, Validators.min(0)]),
    surface: new FormControl("", [Validators.required, Validators.min(10)]),
    terrace: new FormControl(false, []),
    surfaceterrace: new FormControl("", [Validators.min(0)]),
    category: new FormControl("", [Validators.required, Validators.minLength(3)]),
    ResidenceId: new FormControl("", [Validators.required, Validators.min(1)]),
  });


  get apartNum() {
    return this.apartement.get('apartNum');
  }
  get floorNum() {
    return this.apartement.get('floorNum');
  }
  get surface() {
    return this.apartement.get('surface');
  }
  get terrace() {
    return this.apartement.get('terrace');
  }
  get surfaceterrace() {
    return this.apartement.get('surfaceterrace');
  }
  get category() {
    return this.apartement.get('category');
  }
  get ResidenceId() {
    return this.apartement.get('ResidenceId');
  }

  add() {
    console.log(this.apartement.value);
    console.log(this.apartement.getRawValue());
    this.apartement.reset();
  }
}
