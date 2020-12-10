import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedComponent } from './components/logged/logged.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'logged', component: LoggedComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
