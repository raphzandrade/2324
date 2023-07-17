import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { PagesModule } from './pages/pages.module';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';
import { ListPagePushBasedComponent } from './pages/list-page-push-based/list-page-push-based.component';

const routes: Routes = [
  { path: 'minha-lista', component: ListPageComponent },
  { path: 'exemplo-push-based', component: ListPagePushBasedComponent},
  { path: 'cadastro', component: FormPageComponent },
  { path: 'diretivas', component: DirectivesPageComponent },
  { path: '**', redirectTo: '/exemplo-push-based' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
