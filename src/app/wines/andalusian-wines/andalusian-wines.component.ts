import { Component, OnInit } from '@angular/core';
import { Wine } from '../../models/wine';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-andalusian-wines',
  templateUrl: './andalusian-wines.component.html',
  styleUrls: ['./andalusian-wines.component.css']
})
export class AndalusianWinesComponent implements OnInit {

  andalusianWines: Wine[];

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.getAndalusianWines();
  }

  getAndalusianWines(): void {
    this.wineService.getAndalusianWines().
      subscribe(andalusianWines => this.andalusianWines = andalusianWines);
  }

}
