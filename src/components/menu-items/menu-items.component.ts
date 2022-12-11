import { Component } from '@angular/core';
import { MenuItem } from '../../model';

@Component({
  selector: 'date-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {

  menuItems: MenuItem[] = [{
    title: 'Age Calculator',
    routeUrl: "/age-calculator",
    imageUrl: "https://mahabharti.in/wp-content/uploads/2022/03/Age-Calculator-Live.jpg"
  },
  {
    title: 'Count days',
    routeUrl: "/count-days",
    imageUrl: "https://media.tenor.com/q8OcRUR7N6kAAAAj/countdown.gif"
  }
];
}
