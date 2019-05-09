import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-meats',
  templateUrl: './meats.component.html',
  styleUrls: ['./meats.component.css']
})
export class MeatsComponent implements OnInit {

  meats: Product[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMeats();
  }

  getMeats(): void {
    this.menuService.getMeats().
      subscribe(meats => this.meats = meats);
  }

}
