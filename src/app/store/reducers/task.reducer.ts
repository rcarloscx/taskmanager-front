import { TaskState } from '../state/task.state';
import { createReducer, on } from '@ngrx/store';
import * as taskActions from '../actions/task.actions';
import { Task } from '../../models/task';

export const initialState: TaskState = {
  items: [],
  isLoading: false,
  error: null,
  selectedTask: null,
};

export const taskReducer = createReducer(
  initialState,
  on(taskActions.loadTaskRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true 
  })),
 
  on(taskActions.loadTaskSuccessAction, (state, { task }) => ({
      ...state,
      isLoading: false,
      selectedTask: task
  })),
 
  on(taskActions.loadTaskFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
 
  on(taskActions.loadRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(taskActions.loadSuccessAction, (state, { items }) => ({
      ...state,
      isLoading: false,
      items: items
  })),
 
  on(taskActions.loadFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(taskActions.saveRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(taskActions.saveSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selectedTask: item,
    items: [...state.items, item],
    error: null
  })),
 
  on(taskActions.saveFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(taskActions.updateRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(taskActions.updateSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selectedTask: item,
    error: null
  })),
 
  on(taskActions.updateFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(taskActions.deleteRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(taskActions.deleteFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  }))
);