import {BehaviorSubject, Observable} from 'rxjs';
import {IResult} from '../interfaces/interfaces';

export class ResultsDataService{

    private $resultsData = new BehaviorSubject([]);

    getResultsData(): Observable<IResult[]> {
        return this.$resultsData.asObservable();
    }

    addResult(newResult: IResult): void{
        this.$resultsData.next([...this.$resultsData.value, newResult]);
    }
}