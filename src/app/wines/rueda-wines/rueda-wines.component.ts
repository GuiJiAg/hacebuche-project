import { Component, OnInit } from '@angular/core';
import { Wine } from '../../models/wine';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-rueda-wines',
  templateUrl: './rueda-wines.component.html',
  styleUrls: ['./rueda-wines.component.css']
})
export class RuedaWinesComponent implements OnInit {

  ruedaWines: Wine[];

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.getRuedaWines();
  }

  getRuedaWines(): void {
    this.wineService.getRuedaWines().
      subscribe(ruedaWines => this.ruedaWines = ruedaWines);
  }

}
