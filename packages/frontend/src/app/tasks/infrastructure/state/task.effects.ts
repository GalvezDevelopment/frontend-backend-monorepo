import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, tap } from 'rxjs';
import { Task } from '../../domain/models/task.model';
import { TasksRepositoryImplementation } from '../repository/tasks.repository.impl';
import { add, getAll, getAllComplete, remove } from './task.actions';

@Injectable({
    providedIn: 'root'
})
export class TaskEffects {
    add$ = createEffect(() => this.actions.pipe(
        ofType(add),
        exhaustMap(action => this.tasksService.add(action.task).pipe(
            map(() => getAll())
        ))
    ));

    getAll$ = createEffect(() => this.actions.pipe(
        ofType(getAll),
        exhaustMap(() => this.tasksService.getAll().pipe(
            map((tasks: Task[]) => getAllComplete({ tasks }))
        ))
    ));

    remove$ = createEffect(() => this.actions.pipe(
        ofType(remove),
        exhaustMap(action => this.tasksService.removeById(action.taskId).pipe(
            map(() => getAll())
        ))
    ));

    constructor(
        private tasksService: TasksRepositoryImplementation,
        private actions: Actions
    ) { }
}
