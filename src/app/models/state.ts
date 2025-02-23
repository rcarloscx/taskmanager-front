import { Task } from '../models/task';

export interface TaskState {
  tasks: Task[];
  selectedTask: Task | null;
  isLoading?: boolean;
  error?: string | null;
}

export const initialState: TaskState = {
  tasks: [],
  selectedTask: null,
  isLoading: false,
  error: null
};
