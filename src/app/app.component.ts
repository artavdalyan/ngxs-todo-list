import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToDoItem } from '../store/actions/todo.actions';
import { Observable } from 'rxjs';
import { guid as GUID } from '../helpers/guid';
import { Todo } from '../store/models/todo.model';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo = '';

  constructor(private _store: Store) {
  }

  addTodo() {
    const value = this.todo.trim();
    if (!this.todo) {
      return false;
    }
    this._store.dispatch(new AddToDoItem({
      id: GUID(),
      text: value,
      completed: false
    })).subscribe(() => this.todo = '');
  }
}
