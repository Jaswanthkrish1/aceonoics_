import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoViewRoutingModule } from './todo-view-routing.module';
import { TodoViewComponent } from './todo-view.component';


@NgModule({
  declarations: [
    TodoViewComponent
  ],
  imports: [
    CommonModule,
    TodoViewRoutingModule
  ]
})
export class TodoViewModule { }
