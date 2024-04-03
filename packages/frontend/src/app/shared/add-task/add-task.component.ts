import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Input() name = '';
  @Output() nameChange = new EventEmitter<string>();

  add(): void {
    if (this.name.trim()) this.nameChange.emit(this.name);
  }
}
