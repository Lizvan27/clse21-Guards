import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  public login!:FormGroup;

  constructor(private formLogin:FormBuilder){

  }
  ngOnInit(): void {
    this.login= this.formLogin.group({
      name:['',
        [Validators.required,
        Validators.maxLength(30)]
      ],
      pass:['',
      [Validators.required,
      Validators.minLength(6)]

      ]
    })
  }

  mostrar(){
    
  }

}
