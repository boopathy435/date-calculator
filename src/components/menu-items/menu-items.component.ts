import { Component } from '@angular/core';
import { AgeCalculationComponent } from '../';

@Component({
  selector: 'date-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {

  menuItems=[{
    title: 'Age Calculator',component: AgeCalculationComponent
  }];
}
