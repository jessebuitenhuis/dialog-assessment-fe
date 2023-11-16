import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RoutesRoutingModule } from './routes-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShareModule } from '../share/share.module';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  declarations: [DashboardComponent, EntryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RoutesRoutingModule,
    ShareModule,
  ],
  providers: [],
})
export class RoutesModule {}
