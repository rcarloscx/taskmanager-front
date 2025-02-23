import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TaskApiService } from '../../services/task-api.service';
import * as taskActions from '../actions/task.actions';
import { Task } from '../../models/task';

@Injectable()
export class TaskStoreEffects {
    constructor(private actions$: Actions, private taskApiService: TaskApiService) {}


    loadBookRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(taskActions.loadTaskRequestAction),
          switchMap(action => {
            const subject = "Task";
            return this.taskApiService.getTask(action.id).pipe(
              map((task: any) => {
                  return taskActions.loadTaskSuccessAction({ task })
              }),
              catchError((error: any) => {
                return of(taskActions.loadTaskFailureAction({ error }))
              })
            )
          })
      ))

      loadRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(taskActions.loadRequestAction),
          switchMap(action => {
            console.log("test1");
            
            const subject = "Tasks";      
            return this.taskApiService.getTasks().pipe(
              map((items: any[]) => {
                const tasks: Task[] = items.map(item => ({
                  idTask: item.idTask,
                  title: item.title,
                  description: item.description
                }));
                console.log(tasks.length);
                console.log("Tasks fetched:", tasks);
                return taskActions.loadSuccessAction({ items: tasks })
              }),
              catchError(error => {
                console.error("Error fetching tasks:", error);
                return of(taskActions.loadFailureAction({ error }))
              })
            )
          })
      ))

      saveRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(taskActions.saveRequestAction),
          switchMap(action => {
            const subject = "Task";      
            return this.taskApiService.saveTask(action.item).pipe(
              map((item: any) => {
                  return taskActions.saveSuccessAction({ item })
              }),
              catchError(error => {
                return of(taskActions.saveFailureAction({ error }))
              })
            )
          })
      ))

      updateRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(taskActions.updateRequestAction),
        switchMap(action => {
          return this.taskApiService.updateTask(action.item).pipe(
              map((item: any) => {
                  return taskActions.updateSuccessAction({ item })
              }),
              catchError(error => {
                return of(taskActions.updateFailureAction({ error }))
              })
            )
          })
      ))
     
      deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(taskActions.deleteRequestAction),
        switchMap(action => {
          return this.taskApiService.deleteTask(action.id).pipe(
              map((item: any) => {
                  return taskActions.deleteSuccessAction({ id: action.id })
              }),
              catchError(error => {
                return of(taskActions.deleteFailureAction({ error }))
              })
            )
        })
      ))
  
}
