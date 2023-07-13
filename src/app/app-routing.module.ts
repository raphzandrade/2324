import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { PagesModule } from './pages/pages.module';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';

const routes: Routes = [
  { path: 'minha-lista', component: ListPageComponent },
  { path: 'cadastro', component: FormPageComponent },
  { path: 'diretivas', component: DirectivesPageComponent },
  { path: '**', redirectTo: '/minha-lista' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
