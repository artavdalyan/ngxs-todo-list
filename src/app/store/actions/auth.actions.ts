import { ISignIn } from '../models/auth.model';

export class SignIn {
  static readonly type = '[Auth] SignIn';
  constructor(public payload: ISignIn) {}
}

export class SignOut {
  static readonly type = '[Auth] SignOut';
}
