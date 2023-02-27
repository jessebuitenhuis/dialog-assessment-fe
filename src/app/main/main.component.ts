import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  progress: number = 0;

  getProgress() {
    let progressPercent = this.progress / this.goalForm.value.goal;
    return progressPercent;
  }

  goalForm = this.formBuilder.group({
    goal: new FormControl(),
  });

  onSubmitGoal() {

  }

  todayForm = this.formBuilder.group({
    desc: new FormControl(),
    today: new FormControl(),
  });

  onSubmitToday() {
    this.progress += this.todayForm.value.today;
  }

  constructor(private formBuilder: FormBuilder) { }
}
