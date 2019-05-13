import { Component, OnInit } from '@angular/core';
import { Wine } from '../../models/wine';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-castilla-wines',
  templateUrl: './castilla-wines.component.html',
  styleUrls: ['./castilla-wines.component.css']
})
export class CastillaWinesComponent implements OnInit {

  castillaWines: Wine[];

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.getCastillaWines();
  }

  getCastillaWines(): void {
    this.wineService.getCastillaWines().
      subscribe(castillaWines => this.castillaWines = castillaWines);
  }

}
