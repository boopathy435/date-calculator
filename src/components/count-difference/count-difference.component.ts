import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, differenceInWeeks, differenceInMonths } from 'date-fns';

@Component({
  selector: 'date-count-difference',
  templateUrl: './count-difference.component.html',
  styleUrls: ['./count-difference.component.scss']
})
export class CountDifferenceComponent {
  dateForm!: FormGroup;
  formLabels = ['From Date', 'To Date'];
  differenceInSeconds!: number;
  differenceInMinutes!: number;
  differenceInHours!: number;
  differenceInDays!: number;
  differenceInWeeks!: number;
  differenceInMonths!: number;
  result = false;

  constructor(private formBuilder: FormBuilder) {
    this.dateForm = this.formBuilder.group({
      fromDate: new Date(),
      toDate: new Date(),
    });
  }

  calculateDifference() {
    const fromDate = this.dateForm.get('fromDate')?.value;
    const toDate = this.dateForm.get('toDate')?.value;
    this.differenceInSeconds = differenceInSeconds(toDate, fromDate);
    this.differenceInMinutes = differenceInMinutes(toDate, fromDate);
    this.differenceInHours = differenceInHours(toDate, fromDate);
    this.differenceInDays = differenceInDays(toDate, fromDate);
    this.differenceInWeeks = differenceInWeeks(toDate, fromDate);
    this.differenceInMonths = differenceInMonths(toDate, fromDate);
    this.result = [this.differenceInSeconds, this.differenceInMinutes, this.differenceInHours, this.differenceInDays, this.differenceInWeeks, this.differenceInMonths].some(value => !!value);
  }
}
