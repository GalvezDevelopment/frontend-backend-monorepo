import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

export const globalState = {};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot()
  ],
  exports: [StoreModule]
})
export class StateModule { }
