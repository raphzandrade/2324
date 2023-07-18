import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { ComponentsModule } from '../components/components.module';
import { FormPageComponent } from './form-page/form-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesPageComponent } from './directives-page/directives-page.component';
import { DirectivesModule } from '../directives/directives.module';
import { ListPagePushBasedComponent } from './list-page-push-based/list-page-push-based.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    ListPageComponent,
    FormPageComponent,
    DirectivesPageComponent,
    ListPagePushBasedComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    DirectivesModule
  ]
})
export class PagesModule { }
