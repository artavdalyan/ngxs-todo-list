import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { DeleteToDoItem, ToggleTodo, UpdateToDoItem } from '../../../store/actions/todo.actions';
import { Todo } from '../../../store/models/todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: Todo;
  isEdit = false;

  constructor(private _store: Store) {
  }

  deleteTodo() {
    this._store.dispatch(new DeleteToDoItem(this.item.id));
  }

  editToDo() {
    this.isEdit = !this.isEdit;
  }

  toggleTodo() {
    this._store.dispatch(new ToggleTodo(this.item.id));
  }

  updateTodo(value: string) {
    value = value.trim();
    if (!value) {
      return this.cancel();
    }
    this._store.dispatch(new UpdateToDoItem(this.item.id, value))
      .subscribe(() => this.cancel());
  }

  cancel() {
    this.editToDo();
  }
}
