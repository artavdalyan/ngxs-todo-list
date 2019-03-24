import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { AuthService } from '../../services/auth.service';
import { SignIn } from '../actions/auth.actions';
import { tap } from 'rxjs/operators';



export interface AuthStateModel {
  isLogged : boolean,
  user : {}
}

export const getToDoInitialState = (): AuthStateModel => ({
  isLogged: false,
  user: {}
});

@State<AuthStateModel>({
  name: 'auth',
  defaults: getToDoInitialState()
})
export class AuthState {
  constructor( private authService: AuthService) {}
  @Action(SignIn)
  SignIn({getState, patchState}: StateContext<AuthStateModel>, {payload}: SignIn) {
      return this.authService.signIn(payload)
        .pipe( tap((user)=> patchState({
          isLogged : true,
          user
        })))
  }

  @Action(SignIn)
  SignOut({getState, patchState}: StateContext<AuthStateModel>){
    patchState({
          isLogged : false,
          user : {}
        })
  }
}

