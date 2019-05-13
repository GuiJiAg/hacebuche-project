import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-scrambleds',
  templateUrl: './scrambleds.component.html',
  styleUrls: ['./scrambleds.component.css']
})
export class ScrambledsComponent implements OnInit {

  scrambleds: Food[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getScrambleds();
  }

  getScrambleds(): void {
    this.menuService.getScrambleds().
      subscribe(scrambleds => this.scrambleds = scrambleds);
  }

}
