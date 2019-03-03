import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { Todo } from '../models/todo.model';
import {
  AddToDoItem,
  ToggleTodo,
  DeleteToDoItem, UpdateToDoItem
} from '../actions/todo.actions';
import { TodoService } from '../../app/services/todo.service';

export interface TodoStateModel {
  todoList: Todo[];
}

export const getToDoInitialState = (): TodoStateModel => ({
  todoList: [],
});

@State<TodoStateModel>({
  name: 'todo',
  defaults: getToDoInitialState()
})
export class TodoState implements NgxsOnInit  {
  @Selector()
  static selectedTodo(state: TodoStateModel) {
    return state.todoList.filter(item => item.completed);
  }

  @Selector()
  static getToDoList(state: TodoStateModel) {
    return state.todoList;
  }

  constructor(private todoService: TodoService) {
  }

  ngxsOnInit({patchState}: StateContext<TodoStateModel>) {
    this.todoService.getItems().subscribe(
      (todoList) => {
        patchState({
          todoList
        });
      }
  );
  }
  @Action(AddToDoItem)
  addItem({getState, patchState}: StateContext<TodoStateModel>, {payload}: AddToDoItem) {
    const state = getState();
    return patchState({
      todoList: [...state.todoList, payload]
    });
  }

  @Action(DeleteToDoItem)
  removeItem({getState, patchState}: StateContext<TodoStateModel>, {id}: DeleteToDoItem) {
    const state = getState();
    return patchState({
      todoList: state.todoList.filter(item => item.id !== id)
    });
  }

  @Action(ToggleTodo)
  toggleTodo({getState, patchState}: StateContext<TodoStateModel>, {id}: ToggleTodo) {
    const state = getState();
    const findElement: Todo = state.todoList.find(item => item.id === id);
    if (findElement) {
      findElement.completed = !findElement.completed;
    }
    return patchState({
      todoList: state.todoList
    });
  }

  @Action(UpdateToDoItem)
  update({getState, patchState}: StateContext<TodoStateModel>, {text, id}: UpdateToDoItem) {
    const state = getState();
    const findElement: Todo = state.todoList.find(item => item.id === id);
    if (findElement) {
      findElement.text = text;
    }
    return patchState({
      todoList: state.todoList
    });
    }
}

