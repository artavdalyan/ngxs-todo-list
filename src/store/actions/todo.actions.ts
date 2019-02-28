import { Todo } from '../models/todo.model';

export class AddToDoItem {
  static readonly type = '[ToDo] Add';

  constructor(public payload: Todo) {
  }
}

export class RemoveToDoItem {
  static readonly type = '[ToDo] Remove';

  constructor(public payload: number) {
  }
}

export class EditToDoItem {
  static readonly type = '[ToDo] Edit';

  constructor(public payload: Todo) {
  }
}

export class ToggleTodo {
  static readonly type = '[TODO] Toggle';

  constructor(public payload: number) {
  }
}
