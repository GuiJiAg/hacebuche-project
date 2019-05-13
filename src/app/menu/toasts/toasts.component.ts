import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {

  toasts: Food[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getToasts();
  }

  getToasts(): void {
    this.menuService.getToasts().
      subscribe(toasts => this.toasts = toasts);
  }

}
