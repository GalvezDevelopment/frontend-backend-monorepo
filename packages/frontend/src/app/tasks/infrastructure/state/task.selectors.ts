import { createSelector } from '@ngrx/store';
import { GlobalState } from '../../../state/global-state.interface';

const featureSelector = (state: GlobalState) => state.tasks;
export const selectTasks = createSelector(featureSelector, state => [...state])