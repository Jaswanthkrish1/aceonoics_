import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTodoComponent } from './update-todo.component';

const routes: Routes = [{path:'',component:UpdateTodoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateTodoRoutingModule { }
