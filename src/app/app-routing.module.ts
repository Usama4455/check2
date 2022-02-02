import { ResultComponent } from './result/result.component';
import { Mechanical2Component } from './mechanical2/mechanical2.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { QuizComponent } from './quiz/quiz.component';
import { Question2Component } from './question2/question2.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsamaComponent } from './usama/usama.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path : 'usama',
    component: UsamaComponent,
  },
  {
    path : 'question2',
    component: Question2Component,
  },
  {
    path : 'quiz',
    component: QuizComponent,
  },
  {
    path : 'mechanical',
    component: MechanicalComponent,
  },
  {
    path : 'mechanical2',
    component: Mechanical2Component,
  },
  {
    path : 'result',
    component: ResultComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
