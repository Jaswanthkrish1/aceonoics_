import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoViewComponent } from './todo-view.component';


const routes: Routes = [{path:'',component:TodoViewComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoViewRoutingModule { }
