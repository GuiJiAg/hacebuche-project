import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-fishs',
  templateUrl: './fishs.component.html',
  styleUrls: ['./fishs.component.css']
})
export class FishsComponent implements OnInit {

  fishs: Food[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getFishs();
  }

  getFishs(): void {
    this.menuService.getFishs().
      subscribe(fishs => this.fishs = fishs);
  }

}
