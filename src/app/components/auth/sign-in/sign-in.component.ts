import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SignIn } from '../../../store/actions/auth.actions';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent{

  constructor(private store: Store) { }

 singIn(){
     this.store.dispatch(new SignIn({
            username: 'Artur',
            password: '123456'
      })).subscribe(()=> {

     },() => {

      })
 }

}
