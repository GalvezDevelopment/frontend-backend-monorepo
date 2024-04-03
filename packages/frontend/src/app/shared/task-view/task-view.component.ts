import { Component, input } from '@angular/core';
import { Task } from '../../tasks/domain/models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent {
  task = input.required<Task>();
}
