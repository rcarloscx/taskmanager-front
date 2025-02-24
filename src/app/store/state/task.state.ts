import { Task } from '../../models/task';

export interface TaskState {
  items: Task[];
  isLoading: boolean;
  error: string | null;
  selectedTask: Task | null;
}