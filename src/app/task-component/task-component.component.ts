import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { AppState } from '../store/state/app.state';
import * as TaskStoreActions from '../store/actions/task.actions';
import * as TaskSelectorsTypes from '../store/selectors/task.selectors';


@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  items$: Observable<Task[]> = this.store$.select(TaskSelectorsTypes.getTasks);
  newTask: Task = {
    idTask: 0,
    title: '',
    description: '',
    status: 1
  };
  tasks: Task[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalItems: number = 0;
  isViewingTask: boolean = false;
  selectedTask: Task | null = null; 

  constructor(
    private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.store$.dispatch(TaskStoreActions.loadRequestAction());

    /*this.items$.subscribe(items => {
      console.log('Mapped tasks:', items);
    });*/
    this.items$.subscribe(items => {
      this.tasks = items;
      this.totalItems = items.length;
      this.updateTasksForPage();
    });
  }

  updateTasksForPage(): void {
    this.items$.subscribe((allTasks) => {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.tasks = allTasks.slice(start, end);
    });
  }

  viewTask(task: Task): void {
    this.isViewingTask = true;
    this.selectedTask = task;
    this.newTask = { ...task };
  }

  cancelView(): void {
    this.isViewingTask = false;
    this.newTask = { idTask: 0, title: '', description: '', status: 1 };
  }

  editTask(): void {
    if (this.selectedTask) {
      this.isViewingTask = false;
      this.store$.dispatch(TaskStoreActions.updateRequestAction({ item: this.newTask }));
      this.store$.dispatch(TaskStoreActions.loadRequestAction());
    }
  }

  deleteTask(): void {
    if (this.selectedTask) {
      this.store$.dispatch(TaskStoreActions.deleteRequestAction({ id: this.selectedTask.idTask }));
      this.store$.dispatch(TaskStoreActions.loadRequestAction());
      this.newTask = { idTask: 0, title: '', description: '', status: 1 };
      this.selectedTask = null;
      this.isViewingTask = false;
    }
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updateTasksForPage();
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  onRefresh() {
    this.store$.dispatch(TaskStoreActions.loadRequestAction());
  }

  onSubmit() {
    if (this.newTask.title && this.newTask.description) {

      this.store$.dispatch(TaskStoreActions.saveRequestAction({ item: this.newTask }));

      this.newTask = {
        idTask: 0,
        title: '',
        description: '',
        status: 1
      };
    }
  }

  getStatusText(status: number): string {
    switch (status) {
      case 1:
        return 'Por Hacer';
      case 2:
        return 'En Progreso';
      case 3:
        return 'Completada';
      default:
        return 'Desconocido';
    }
  }
}
