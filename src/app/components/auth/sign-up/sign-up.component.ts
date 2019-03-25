import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
   regForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.createregForm();
  }
  private createregForm() {
    this.regForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public hasError(controlName: string, errorName: string) {
    return this.regForm.controls[controlName].hasError(errorName);
  }

  public singUp() {
    this.authService.signUp().subscribe(() => {
      this.regForm.reset();
      //this.router.navigateByUrl('sign-in')
    })
  }
}
