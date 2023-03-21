import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GewichtComponent } from './gewichtstracker/components/gewicht/gewicht.component';
import { HomeComponent } from './gewichtstracker/components/home/home.component';
import { OverzichtComponent } from './gewichtstracker/components/overzicht/overzicht.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'gewicht', component: GewichtComponent},
  {path: 'overzicht', component: OverzichtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
