import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { provideState } from '@ngrx/store';
import { tasksFeatureKey, tasksReducer } from './tasks/infrastructure/state/task.reducer';
import { provideEffects } from '@ngrx/effects';
import { TaskEffects } from './tasks/infrastructure/state/task.effects';

export const routes: Routes = [
    {
        path: '',
        component: TasksComponent,
        providers: [
            provideState({ name: tasksFeatureKey, reducer: tasksReducer }),
            provideEffects(TaskEffects)
        ]
    }
];
