import {Component, OnDestroy, OnInit} from '@angular/core';
import {IResult} from '../interfaces/interfaces';
import {ResultsDataService} from '../services/results.data.service';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

    results: IResult[] = [];
    resultsSubscription: Subscription;

    resultForm: FormGroup = new FormGroup({
        value: new FormControl(),
        description: new FormControl(),
        date: new FormControl()
    });

    constructor(private resultsDataService: ResultsDataService) {
    }

    ngOnInit(): void {
        this.resultsSubscription = this.resultsDataService.getResultsData().subscribe(resultsData => {
            this.results = resultsData;
        });
    }

    ngOnDestroy(): void {
        this.resultsSubscription.unsubscribe();
    }

    handleAddResults(newResult: IResult): void {
        this.resultsDataService.addResult(newResult);
    }

    saveNewResults(): void {
        this.handleAddResults(this.resultForm.value);
    }
}
