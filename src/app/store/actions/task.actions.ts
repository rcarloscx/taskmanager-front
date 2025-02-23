import { Action, createAction, props } from '@ngrx/store';
import { Task } from '../../models/task';

export enum ActionTypes {
  LOAD_TASK_REQUEST = '[Task] Load Task Request',
  LOAD_TASK_FAILURE = '[Task] Load Task Failure',
  LOAD_TASK_SUCCESS = '[Task] Load Task Success',

  LOAD_REQUEST = '[Task] Load Request',
  LOAD_FAILURE = '[Task] Load Failure',
  LOAD_SUCCESS = '[Task] Load Success',

  SAVE_REQUEST = '[Task] Save',
  SAVE_FAILURE = '[Task] Save Failure',
  SAVE_SUCCESS = '[Task] Save Success',

  UPDATE_REQUEST = '[Task] Update',
  UPDATE_FAILURE = '[Task] Update Failure',
  UPDATE_SUCCESS = '[Task] Update Success',

  DELETE_REQUEST = '[Task] Delete',
  DELETE_FAILURE = '[Task] Delete Failure',
  DELETE_SUCCESS = '[Task] Delete Success'

}

export const loadTaskRequestAction = createAction(
    ActionTypes.LOAD_TASK_REQUEST,
    props<{ id: number }>()
  );
  
  export const loadTaskSuccessAction = createAction(
    ActionTypes.LOAD_TASK_SUCCESS,
    props<{ task: Task }>()
  );
  
  export const loadTaskFailureAction = createAction(
    ActionTypes.LOAD_TASK_FAILURE,
    props<{ error: string }>()
  );
  
  export const loadRequestAction = createAction(
    ActionTypes.LOAD_REQUEST
  );
  
  export const loadFailureAction = createAction(
    ActionTypes.LOAD_FAILURE,
    props<{ error: string }>()
  );
  
  export const loadSuccessAction = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{ items: Task[] }>()
  );
  

  export const saveRequestAction = createAction(
    ActionTypes.SAVE_REQUEST,
    props<{ item: Task }>()
  );
  
  export const saveFailureAction = createAction(
    ActionTypes.SAVE_FAILURE,
    props<{ error: string }>()
  );
  
  export const saveSuccessAction = createAction(
    ActionTypes.SAVE_SUCCESS,
    props<{ item: Task }>()
  );
  
  export const updateRequestAction = createAction(
    ActionTypes.UPDATE_REQUEST,
    props<{ item: Task }>()
  );
  
  export const updateFailureAction = createAction(
    ActionTypes.UPDATE_FAILURE,
    props<{ error: string }>()
  );
  
  export const updateSuccessAction = createAction(
    ActionTypes.UPDATE_SUCCESS,
    props<{ item: Task }>()
  );
  
  export const deleteRequestAction = createAction(
    ActionTypes.DELETE_REQUEST,
    props<{ id: number }>()
  );
  
  export const deleteFailureAction = createAction(
    ActionTypes.DELETE_FAILURE,
    props<{ error: string }>()
  );
  
  export const deleteSuccessAction = createAction(
    ActionTypes.DELETE_SUCCESS,
    props<{ id: number }>()
  );
  
