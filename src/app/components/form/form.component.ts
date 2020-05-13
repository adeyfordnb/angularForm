import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      address: new FormGroup({
        city: new FormControl('kiev'),
        street: new FormControl(null, Validators.required)
      })
    });
  }

  submit() {
    if(this.form.valid){
      const form_data = this.form.value;
      console.log(form_data);
      this.form.reset();
    }
  }
}
