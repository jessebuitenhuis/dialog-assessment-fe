import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {ResultsModule} from '../results/results.module';
import {GoalsModule} from '../goals/goals.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        ResultsModule,
        GoalsModule,
    ],
    providers: [],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
