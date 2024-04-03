import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { GlobalState } from '../state/global-state.interface';
import { Task } from './domain/models/task.model';
import * as taskActions from './infrastructure/state/task.actions';
import { selectTasks } from './infrastructure/state/task.selectors';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, SharedModule],
  providers: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;
  taskName = '';

  constructor(private store: Store<GlobalState>) {
    this.tasks$ = store.select(selectTasks);
  }

  ngOnInit(): void {
    this.store.dispatch(taskActions.getAll());
  }

  add(taskName: string): void {
    if (taskName.trim()) this.store.dispatch(taskActions.add({ task: { name: taskName } }));
  }

  remove(taskId?: string): void {
    if (taskId) this.store.dispatch(taskActions.remove({ taskId }));
  }

  trackById(index: number, task: Task): string {
    return task && task.id || task.name;
  }
}
