import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TaskState } from '../state/task.state';


const getTaskState = createFeatureSelector<TaskState>('taskState');

export const getTasks = createSelector(
  getTaskState,
  (state: TaskState) => state.items
);

export const getTask = createSelector(
  getTaskState,
  (state: TaskState, id: number) => state.items.filter(x=> x.idTask === id)
);
 
export const getSelectedTask = createSelector(
  getTaskState,
  (state: TaskState) => state.selectedTask
);
