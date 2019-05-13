import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.css']
})
export class SaladsComponent implements OnInit {

  salads: Food[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getSalads();
  }

  getSalads(): void {
    this.menuService.getSalads().
      subscribe(salads => this.salads = salads);
  }

}
