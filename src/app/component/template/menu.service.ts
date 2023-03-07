import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  active = true

  constructor() { }

  showMenu(show:boolean):void {
    this.active = show
  }
}
