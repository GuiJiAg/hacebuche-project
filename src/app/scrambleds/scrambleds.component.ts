import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-scrambleds',
  templateUrl: './scrambleds.component.html',
  styleUrls: ['./scrambleds.component.css']
})
export class ScrambledsComponent implements OnInit {

  scrambleds: Product[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getScrambleds();
  }

  getScrambleds(): void {
    this.menuService.getScrambleds().
      subscribe(scrambleds => this.scrambleds = scrambleds);
  }

}
