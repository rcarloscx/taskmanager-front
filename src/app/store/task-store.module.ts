import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TaskStoreEffects } from './effects/task.effects';
import { taskReducer } from './reducers/task.reducer';
 
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('taskStore', taskReducer),
    EffectsModule.forFeature([TaskStoreEffects])
  ],
  providers: [TaskStoreEffects]
})
export class TaskStoreModule {}
