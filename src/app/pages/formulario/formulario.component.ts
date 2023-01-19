import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit{
  public formDatos!:FormGroup

  constructor(private FormD:FormBuilder){}

  ngOnInit(): void {
    
  }

  enviar(){

  }

}
