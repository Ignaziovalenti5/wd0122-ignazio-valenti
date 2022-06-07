import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hero1Component } from './hero1/hero1.component';
import { Hero2Component } from './hero2/hero2.component';

const routes: Routes = [
  {
    path: 'hero1',
    component: Hero1Component
  },
  {
    path: 'hero2',
    component: Hero2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
