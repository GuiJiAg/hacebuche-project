import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent implements OnInit {

  entrees: Food[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getEntrees();
  }

  getEntrees(): void {
    this.menuService.getEntrees().
      subscribe(entrees => this.entrees = entrees);
  }

}
