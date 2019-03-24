import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SignIn } from '../../../store/actions/auth.actions';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.invalid && (control.dirty || control.touched);
  }
}

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm: FormGroup;

  errorStateMatcher = new MyErrorStateMatcher();

  constructor(private store: Store, private fb: FormBuilder,
              private router: Router
  ) {
    this.createLoginForm();
  }

  private createLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public singIn() {
    this.store.dispatch(new SignIn(this.loginForm.value)).subscribe(() => {
      this.loginForm.reset();
      //this.router.navigateByUrl('lists')
    }, () => {

    })
  }

}
