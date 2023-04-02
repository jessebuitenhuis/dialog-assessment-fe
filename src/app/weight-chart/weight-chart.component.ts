import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Subscription } from 'rxjs';
import { WeightService } from '../weight.service';

@Component({
  selector: 'app-weight-chart',
  templateUrl: './weight-chart.component.html',
  styleUrls: ['./weight-chart.component.scss'],
})
export class WeightChartComponent implements OnInit, OnDestroy {
  private entryAddedSubscription: Subscription;
  lineChartData: ChartDataSets[] = [{ data: [], label: 'Weight' }];
  lineChartLabels: Label[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM D, YYYY',
            },
            tooltipFormat: 'll',
          },
          distribution: 'linear',
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 200,
          },
        },
      ],
    },
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'red',
      pointBackgroundColor: 'red',
      pointBorderColor: 'red',
    },
  ];
  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private weightService: WeightService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weightService.weightEntries']) {
      this.loadData();
    }
  }

  ngOnInit(): void {
    this.loadData();
    this.entryAddedSubscription = this.weightService
      .getEntryAddedObservable()
      .subscribe(() => {
        this.loadData();
      });
  }

  ngOnDestroy(): void {
    if (this.entryAddedSubscription) {
      this.entryAddedSubscription.unsubscribe();
    }
  }

  loadData(): void {
    this.lineChartData[0].data = this.weightService.weightEntries.map(
      (entry) => ({
        x: entry.date,
        y: entry.weight,
      })
    );
  }
}
