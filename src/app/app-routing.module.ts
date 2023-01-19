import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosGuard } from './guard/permisos.guard';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[PermisosGuard]},
  {path:'post', component:PostComponent},
  {path:'formulario', component:FormularioComponent, canActivate:[PermisosGuard]},
  {path:'login', component:LoginComponent},
  {path:'**', redirectTo:'404', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
