import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToDoItem } from './store/actions/todo.actions';
import { guid as GUID } from './helpers/guid';
import { Todo } from './store/models/todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  todo = '';

  constructor(private _store: Store, private todoService: TodoService) {
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
