import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.scss']
})
export class DateFormComponent {
  @Input() set fromToDateLabels(labels: string[]) {
    this.fromDateLabel = labels[0];
    this.toDateLabel = labels[1];
  }
  @Input() set form(form: FormGroup) {
    this.dateForm = form;
  }
  fromDateLabel!: string;
  toDateLabel!: string;
  dateForm!: FormGroup;

  constructor() {}
}
