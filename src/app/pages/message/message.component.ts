import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { AuthService } from 'src/app/services/auth.service';

const phpUrl = environment.phpUrl

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public form: FormGroup = this._formbuilder.group({
    message: ['', Validators.required]
})

  constructor(private _router: Router,
              private _phpservice: AuthService,
              private _formbuilder: FormBuilder) { }

  ngOnInit(): void {

  }



  submit(): void{
    this._phpservice.authenticate({textarea: this.form.value.message}).subscribe()

  }
  goBack(): void{
    this._router.navigate(['../'])
  }
}
