import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WeightViewItemComponent} from './components/weight-view-item/weight-view-item.component';
import {WeightViewListComponent} from './components/weight-view-list/weight-view-list.component';

@NgModule({
  declarations: [
    WeightViewItemComponent,
    WeightViewListComponent
  ],
    imports: [
        CommonModule,
    ],
  exports: [
    WeightViewListComponent
  ]
})

export class WeightViewerModule { }
