import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from '../models/todo.model';
import {
  AddToDoItem,
  RemoveToDoItem,
  ToggleTodo,
  EditToDoItem
} from '../actions/todo.actions';

export interface TodoStateModel {
  todoList: Todo[];
}
export const getToDoInitialState = (): TodoStateModel => ({
  todoList : []
});
@State<TodoStateModel>({
  name: 'todo',
  defaults: getToDoInitialState()
})
export class TodoState {
  @Selector()
  static getToDoList(state: TodoStateModel) {
        return state.todoList;
  }
  @Action(AddToDoItem)
  addItem({getState, patchState}: StateContext<TodoStateModel>, {payload}: AddToDoItem) {
      const state = getState();
      return patchState({
        todoList : [...state.todoList, payload]
      })
  }
}

