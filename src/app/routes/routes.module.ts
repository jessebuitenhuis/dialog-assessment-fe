import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RoutesRoutingModule } from './routes-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ReactiveFormsModule, RoutesRoutingModule],
  providers: [],
})
export class RoutesModule {}
