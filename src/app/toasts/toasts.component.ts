import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {

  toasts: Product[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getToasts();
  }

  getToasts(): void {
    this.menuService.getToasts().
      subscribe(toasts => this.toasts = toasts);
  }

}
