import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EditScreenComponent} from './screens/edit-screen/edit-screen.component';
import {MainScreenComponent} from './screens/main-screen/main-screen.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'edit', component: EditScreenComponent },
  { path: 'edit/:id', component: EditScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
