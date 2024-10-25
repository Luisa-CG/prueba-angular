import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { ClientPageComponent } from './components/client-page/client-page.component';

const routes: Routes = [
  { path: 'clients', component: ClientPageComponent },
  { path: 'register', component: ClientRegisterComponent },
  { path: '', redirectTo: '/clients', pathMatch: 'full' }, // Redirecciona a clients por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
