import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'date-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menu = new EventEmitter<void>();

  handleClick() {
    this.menu.emit();
  }
}
