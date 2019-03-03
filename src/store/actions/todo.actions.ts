import { Todo } from '../models/todo.model';

export class AddToDoItem {
  static readonly type = '[ToDo] Add';

  constructor(public payload: Todo) {
  }
}

export class DeleteToDoItem {
  static readonly type = '[ToDo] Delete';

  constructor(public id: string) {
  }
}

export class UpdateToDoItem {
  static readonly type = '[ToDo] Update';

  constructor(public id: string, public text: string) {
  }
}

export class ToggleTodo {
  static readonly type = '[TODO] Toggle';
  constructor(public id: string) {
  }
}
