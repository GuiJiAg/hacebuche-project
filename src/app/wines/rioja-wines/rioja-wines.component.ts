import { Component, OnInit } from '@angular/core';
import { Wine } from '../../models/wine';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-rioja-wines',
  templateUrl: './rioja-wines.component.html',
  styleUrls: ['./rioja-wines.component.css']
})
export class RiojaWinesComponent implements OnInit {

  riojaWines: Wine[];

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.getRiojaWines();
  }

  getRiojaWines(): void {
    this.wineService.getRiojaWines().
      subscribe(riojaWines => this.riojaWines = riojaWines);
  }

}
