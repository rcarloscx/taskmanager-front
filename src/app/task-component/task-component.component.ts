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

  constructor(
    private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.store$.dispatch(TaskStoreActions.loadRequestAction());

    this.items$.subscribe(items => {
      console.log('Mapped tasks:', items);
    });
  }

  onRefresh() {
    console.log("Botón presionado, refrescando tareas...");
    this.store$.dispatch(TaskStoreActions.loadRequestAction());
  }

  loadTasks() {
    this.items$.subscribe(items => {
      console.log("Tareas actuales:", items);
    });
  }
}
