import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialComponent } from '../material/material.component';



@NgModule({
  declarations: [
    FormularioComponent,
    HomeComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialComponent
  ],
  exports: [
    FormularioComponent,
    HomeComponent,
    PostComponent
  ]
})
export class PagesModule { }
