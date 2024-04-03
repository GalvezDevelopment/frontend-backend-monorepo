import { createAction, props } from '@ngrx/store';
import { Task } from '../../domain/models/task.model';

export const add = createAction('[Tasks Component] Add', props<{ task: Task }>());
export const getAll = createAction('[Tasks Component] Get All');
export const getAllComplete = createAction('[Task Component] Tasks loaded', props<{ tasks: Task[] }>());
export const remove = createAction('[Tasks Component] Remove', props<{ taskId: string }>());