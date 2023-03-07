import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private menu : MenuService) {}

  sideBarShow() : void{
    this.menu.showMenu(!this.menu.active)
  }

}
