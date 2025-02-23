import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TaskState } from '../state/task.state';


const getTaskState = createFeatureSelector<TaskState>('taskState');

export const getTasks = createSelector(
  getTaskState,
  (state: TaskState) => state.items
);
