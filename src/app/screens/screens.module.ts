import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InitialScreenComponent} from './initial-screen/initial-screen.component';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {FeaturesModule} from '../features/features.module';
import {SharedModule} from '../shared/shared.module';
import { EditScreenComponent } from './edit-screen/edit-screen.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    InitialScreenComponent,
    MainScreenComponent,
    EditScreenComponent,
  ],
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    InitialScreenComponent,
    MainScreenComponent,
  ]
})

export class ScreensModule { }
