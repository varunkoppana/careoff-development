import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {identitySameValidator} from '../shared/identity-same.directive';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  // registerForm: FormGroup;
  name : string= 'varun';
  constructor(
    // private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     password: ['', [Validators.required, Validators.minLength(8)]],
  //     confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  // }, { validators: identitySameValidator });
  }

  
  // get form() { return this.registerForm.controls; }
}
