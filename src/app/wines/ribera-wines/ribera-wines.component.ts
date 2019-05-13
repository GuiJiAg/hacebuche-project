import { Component, OnInit } from '@angular/core';
import { Wine } from '../../models/wine';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-ribera-wines',
  templateUrl: './ribera-wines.component.html',
  styleUrls: ['./ribera-wines.component.css']
})
export class RiberaWinesComponent implements OnInit {

  riberaWines: Wine[];

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.getRiberaWines();
  }

  getRiberaWines(): void {
    this.wineService.getRiberaWines().
      subscribe(riberaWines => this.riberaWines = riberaWines);
  }

}
