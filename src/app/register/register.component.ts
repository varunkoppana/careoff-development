import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { identitySameValidator } from '../shared/identity-same.directive';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  states: any = [{
    "id": 1, "value": "New York"
  },
  {
    "id": 2, "value": "New Jersey"
  },
  {
    "id": 3, "value": "connecticut"
  },
  {
    "id": 4, "value": "boston"
  }];

  constructor() { }

  ngOnInit() {

  }
  rgstrMember() {
    //todo
  }


}
