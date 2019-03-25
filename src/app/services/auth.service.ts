import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public signIn (payload): Observable<any>{

    return from([{...payload}])

  }
  public signUp (){
    return from([{name: 'artur'}])
  }
  public signOut (){
    return from([{name: 'artur'}])
  }
}
