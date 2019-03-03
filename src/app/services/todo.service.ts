import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../store/models/todo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Todo[]> {
     return this.http.get(`/assets/list.json`)
       .pipe(map( (todoList: Todo[]) => todoList));
  }
}
