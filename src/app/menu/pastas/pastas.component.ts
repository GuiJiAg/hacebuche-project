import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-pastas',
  templateUrl: './pastas.component.html',
  styleUrls: ['./pastas.component.css']
})
export class PastasComponent implements OnInit {

  pastas: Food[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getPastas();
  }

  getPastas(): void {
    this.menuService.getPastas().
      subscribe(pastas => this.pastas = pastas);
  }

}
