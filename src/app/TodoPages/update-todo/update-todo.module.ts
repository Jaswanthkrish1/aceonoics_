import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTodoRoutingModule } from './update-todo-routing.module';
import { UpdateTodoComponent } from './update-todo.component';


@NgModule({
  declarations: [
    UpdateTodoComponent
  ],
  imports: [
    CommonModule,
    UpdateTodoRoutingModule
  ]
})
export class UpdateTodoModule { }
