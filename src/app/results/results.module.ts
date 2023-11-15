import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResultsComponent} from './results.component';
import {ResultsItemComponent} from './results-item/results-item.component';
import {AddButtonComponent} from '../shared/ui/add-button/add-button.component';
import {ResultsDataService} from '../services/results.data.service';

@NgModule({
    declarations: [
        ResultsComponent,
        ResultsItemComponent,
        AddButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        ResultsDataService
    ],
    exports: [
        ResultsComponent,
        ResultsItemComponent
    ]
})
export class ResultsModule {
}
