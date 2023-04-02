import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';
import { NgModule } from '@angular/core';
import { UnitSwitcherComponent } from './unit-switcher/unit-switcher.component';
import { WeightChartComponent } from './weight-chart/weight-chart.component';
import { WeightEntryComponent } from './weight-entry/weight-entry.component';
import { WeightHistoryComponent } from './weight-history/weight-history.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightEntryComponent,
    WeightHistoryComponent,
    GoalSettingComponent,
    UnitSwitcherComponent,
    WeightChartComponent,
  ],
  imports: [BrowserModule, FormsModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
