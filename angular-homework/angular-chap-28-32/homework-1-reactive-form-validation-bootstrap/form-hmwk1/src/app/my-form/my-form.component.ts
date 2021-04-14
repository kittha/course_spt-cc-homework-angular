import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  form: FormGroup;
  uemailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor(
    private fb: FormBuilder
    ) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email, Validators.pattern(this.uemailPattern)]],
      address: [null, Validators.required],
      comments: [null],
    });
  }

  submitForm() {
    alert( JSON.stringify(this.form.value) );
  }

}
