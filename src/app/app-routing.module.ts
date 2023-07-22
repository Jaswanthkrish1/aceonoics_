import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
 {
  path:"forgot",
  loadChildren:()=>
  import('./CoreAuth/forgotpassword/forgotpassword.module').then(
    (m)=>m.ForgotPasswordModule
  ), data:{ breadcrumb: 'forgot' }
 },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ), data:{ breadcrumb: 'dashboard' }
  },

  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule), data:{ breadcrumb: 'Users' }
  },

 
  {
    path: 'userView/:id',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),data:{ breadcrumb: 'User'}
  },

  
  {
    path: 'create-user',
    loadChildren: () =>
      import('./pages/create-user/create-user.module').then(
        (m) => m.CreateUserModule
      ),data:{ breadcrumb: 'Create-user'}
  },

  
  {
    path: 'update-user/:id',
    loadChildren: () =>
      import('./pages/update-user/update-user.module').then(
        (m) => m.UpdateUserModule
      ),data:{ breadcrumb: 'Update-user'}
  },
  // todo module  oparaton module
  {path:'Task-Todo',loadChildren:()=>import('./TodoPages/todo/todo.module').then((m)=>m.TodoModule),data:{ breadcrumb: 'Todos'},},
  {path:'Create-Todo',loadChildren:()=>import('./TodoPages/create-todo/create-todo.module').then((m)=>m.CreateTodoModule),data:{ breadcrumb: 'Create-Todos'}},
  {path:'Update-Todo',loadChildren:()=>import('./TodoPages/update-todo/update-todo.module').then((m)=>m.UpdateTodoModule),data:{ breadcrumb: 'View-Todos'}},
  {path:'View-Todo',loadChildren:()=>import('./TodoPages/todo-view/todo-view.module').then((m)=>m.TodoViewModule),data:{ breadcrumb: 'View-Todos'}}


   
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
