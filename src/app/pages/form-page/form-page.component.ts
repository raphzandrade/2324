import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/interfaces';
import { TodosService } from 'src/app/services';
import { NumberOnlyValidator } from 'src/app/validators';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {

  public myFormGroup: FormGroup = this.createForm();
  public isSending: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private todosService: TodosService,
  ) { }


  private createForm(): FormGroup {
    const formGroup = this.formBuilder.group({
      id: [null, Validators.compose(
        [
          Validators.required,
          NumberOnlyValidator()
        ])
      ],
      message: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ])]
    });

    return formGroup;
  }

  public getControlError(controlName: string, errorName: string): boolean {
    const control = this.myFormGroup.get(controlName);

    const controlIsPristine = control.pristine;

    if (controlIsPristine) return false;

    const hasError: boolean = !!control.getError(errorName)

    return hasError;
  }

  public onSubmit(): void {
    const isInvalid = this.myFormGroup.invalid;

    if (isInvalid) return;

    const id = this.myFormGroup.get('id').value;
    const message = this.myFormGroup.get('message').value;

    const newTodo: Todo = new Todo(id, message);

    const motoboy = this.todosService.postTodo(newTodo)

    this.isSending = true;

    motoboy.subscribe(() => {
      this.isSending = false;
      this.onBack()
    })
  }

  public onBack(): void {
    this.router.navigateByUrl('/minha-lista');
  }
}
