import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeightComponent } from './modules/weight/weight.component';

const routes: Routes = [
  {
    path: '',
    component: WeightComponent
  },
  {
    path: 'progress',
    loadChildren: () => import('./modules/progress/progress.module').then(m => m.ProgressModule)
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
