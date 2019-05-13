import { Component, OnInit } from '@angular/core';
import { Wine } from '../../models/wine';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-albarinios',
  templateUrl: './albarinios.component.html',
  styleUrls: ['./albarinios.component.css']
})
export class AlbariniosComponent implements OnInit {

  albarinios: Wine[];

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.getAlbarinios();
  }

  getAlbarinios(): void {
    this.wineService.getAlbarinios().
      subscribe(albarinios => this.albarinios = albarinios);
  }

}
