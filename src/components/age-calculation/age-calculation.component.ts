import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { differenceInMilliseconds } from 'date-fns';
import { millisecondToTime } from 'src/Utils/date-functions';

@Component({
  selector: 'date-age-calculation',
  templateUrl: './age-calculation.component.html',
  styleUrls: ['./age-calculation.component.scss']
})
export class AgeCalculationComponent {
  dateForm!: FormGroup;
  year!: number;
  result = '';
  formLabels = ['Date of birth','To day'];

  constructor(private formBuilder: FormBuilder) {
    this.dateForm = this.formBuilder.group({
      fromDate: new Date(),
      toDate: new Date(),
    });
  }

  calculateAge() {
    this.result = '';
    const fromDate = this.dateForm.get('fromDate')?.value;
    const toDate = this.dateForm.get('toDate')?.value;
    const milliseconds = differenceInMilliseconds(toDate, fromDate);
    const timeObject = millisecondToTime(milliseconds);

    for (let [key, value] of Object.entries(timeObject)) {
      value && (this.result += ` ${value} ${key}${value>1?'s':''}`)
    }
    this.result = this.result.trim();
  }

}
