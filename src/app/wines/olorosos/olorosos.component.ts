import { Component, OnInit } from '@angular/core';
import { Wine } from '../../models/wine';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-olorosos',
  templateUrl: './olorosos.component.html',
  styleUrls: ['./olorosos.component.css']
})
export class OlorososComponent implements OnInit {

  olorosos: Wine[];

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.getOlorosos();
  }

  getOlorosos(): void {
    this.wineService.getOlorosos().
      subscribe(olorosos => this.olorosos = olorosos);
  }

}
