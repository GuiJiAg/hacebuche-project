import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  desserts: Food[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getDesserts();
  }

  getDesserts(): void {
    this.menuService.getDesserts().
      subscribe(desserts => this.desserts = desserts);
  }

}
