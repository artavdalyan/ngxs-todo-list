import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../store/models/todo.model';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../../store/state/todo.state';
import { TodoService } from '../../services/todo.service';
import { AddToDoItem } from '../../store/actions/todo.actions';
import { guid as GUID } from '../../helpers/guid';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Select(TodoState.getToDoList) items$: Observable<Todo[]>;
  @Select(TodoState.selectedTodo) selected$: Observable<Todo[]>;

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
