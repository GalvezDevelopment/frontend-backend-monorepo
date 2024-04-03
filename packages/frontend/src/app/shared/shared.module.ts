import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewComponent } from './task-view/task-view.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';



@NgModule({
  declarations: [
    TaskViewComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskViewComponent,
    FormsModule,
    AddTaskComponent
  ]
})
export class SharedModule { }
