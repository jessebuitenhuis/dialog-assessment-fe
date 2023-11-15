import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoalsComponent} from './goals.component';
import {GoalItemComponent} from './goal/goal-item.component';

@NgModule({
    declarations: [
        GoalsComponent,
        GoalItemComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        GoalsComponent,
        GoalItemComponent
    ]
})
export class GoalsModule {
}
