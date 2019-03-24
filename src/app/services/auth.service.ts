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

  }
  public signOut (){
    return from([{name: 'artur'}])
  }
}
