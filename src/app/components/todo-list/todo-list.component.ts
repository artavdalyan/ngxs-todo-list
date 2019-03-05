import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../store/models/todo.model';
import { Select } from '@ngxs/store';
import { TodoState } from '../../store/state/todo.state';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Select(TodoState.getToDoList) items$: Observable<Todo[]>;
  @Select(TodoState.selectedTodo) selected$: Observable<Todo[]>;
}
