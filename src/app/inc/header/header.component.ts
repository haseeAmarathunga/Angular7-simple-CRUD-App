import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }
  menuItems: any[];
  appConfig: any;

  ngOnInit() {
    this.loadMenus();
  }

  private loadMenus(): void {
    this.menuItems = [

    ];
  }

}
