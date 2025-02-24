import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task'; // Asegúrate de importar el modelo Task
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  
  private selectedTask = new Subject<any>();
  taskSelected = this.selectedTask.asObservable();

  constructor(private http: HttpClient) {}

  // Obtener todas las tareas
  getTasks() {
    console.log("get task");
    return this.http.get<Task[]>('http://localhost:8080/api/task');
  }

  // Obtener una tarea por su ID
  getTask(id: number) {
    return this.http.get('http://localhost:8080/api/task' + id);
  }

  // Crear una nueva tarea
  saveTask(task: Task) {
    return this.http.post<Task>('http://localhost:8080/api/task', task);
  }

  // Actualizar una tarea existente
  updateTask(task: Task) {
    console.log("id: "+task.status);
    return this.http.put<Task>('http://localhost:8080/api/task/' + task.idTask, task);
  }

  // Eliminar una tarea por ID
  deleteTask(id: number) {
    return this.http.delete<Task>('http://localhost:8080/api/task/' + id);
  }
}
