import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AgeCalculationComponent, CountDifferenceComponent, DateFormComponent, FooterComponent, HeaderComponent, MenuItemsComponent } from '../components';
import { DateStringPipe } from 'src/pipes/date-string.pipe';


const components = [HeaderComponent,
  AgeCalculationComponent, FooterComponent, MenuItemsComponent, DateFormComponent, CountDifferenceComponent];

const pipes = [DateStringPipe];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...pipes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
