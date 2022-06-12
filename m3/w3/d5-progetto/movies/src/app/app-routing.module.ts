import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
{ 
  path: '',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
},
{
  path: 'home',
  redirectTo: '',
  pathMatch: 'full'
},
{ 
  path: 'movies',
  canActivate: [AuthGuard],
  loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule)
},
{ 
  path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
},
{
  path: 'user', 
  canActivate: [AuthGuard],
  loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
