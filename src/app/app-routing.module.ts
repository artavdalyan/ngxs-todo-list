import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';


const route: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    //canActivateChild: [AuthGuard],
    canActivate: [AuthGuard],
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      }, {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
