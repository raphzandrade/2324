import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { PagesModule } from './pages/pages.module';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';
import { ListPagePushBasedComponent } from './pages/list-page-push-based/list-page-push-based.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { AuthGuard } from './guards';

const routes: Routes = [
  { path: 'minha-lista', component: ListPageComponent, canActivate: [AuthGuard] },
  { path: 'exemplo-push-based', component: ListPagePushBasedComponent, canActivate: [AuthGuard]},
  { path: 'cadastro', component: FormPageComponent, canActivate: [AuthGuard] },
  { path: 'diretivas', component: DirectivesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '/minha-lista' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
