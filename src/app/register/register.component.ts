import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.registrationForm = formBuilder.group({
      user: [''],
      password: [''],
      passwordAgain: ['']
    });
  }

  ngOnInit(): void {
  }

}
