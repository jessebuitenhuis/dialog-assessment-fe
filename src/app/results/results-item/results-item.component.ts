import {Component, Input} from '@angular/core';
import {IResult} from '../../interfaces/interfaces';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss']
})
export class ResultsItemComponent {
  @Input() result: IResult;
}
