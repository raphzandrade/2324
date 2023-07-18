import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormsService } from 'src/app/services/forms/forms.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose(
        [Validators.minLength(4), Validators.maxLength(10)]
      )]
    })
  }

  public getControlError(controlName: string, errorName: string): boolean {
    return this.formsService.getControlError(this.myForm, controlName, errorName)
  }

  public onLogin(): void {
    if(this.myForm.invalid) return;
    
    const email: string = this.myForm.get('email').value;
    const password: string = this.myForm.get('password').value;

    this.authService.registerUser(email, password).subscribe()
  }
}
