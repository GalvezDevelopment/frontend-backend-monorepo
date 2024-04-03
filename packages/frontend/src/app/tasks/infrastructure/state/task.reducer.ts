import { createReducer, on } from '@ngrx/store';
import { Task } from '../../domain/models/task.model';
import { getAllComplete } from './task.actions';

export const tasksFeatureKey = 'tasks';
const initialState: Task[] = [];

export const tasksReducer = createReducer(
    initialState,
    on(getAllComplete, (state, { tasks }) => [...tasks])
);