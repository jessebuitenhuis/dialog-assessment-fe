import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';
import { NgModule } from '@angular/core';
import { WeightEntryComponent } from './weight-entry/weight-entry.component';
import { WeightHistoryComponent } from './weight-history/weight-history.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightEntryComponent,
    WeightHistoryComponent,
    GoalSettingComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
