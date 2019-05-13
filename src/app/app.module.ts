import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { EntreesComponent } from './menu/entrees/entrees.component';
import { ToastsComponent } from './menu/toasts/toasts.component';
import { SaladsComponent } from './menu/salads/salads.component';
import { PastasComponent } from './menu/pastas/pastas.component';
import { ScrambledsComponent } from './menu/scrambleds/scrambleds.component';
import { FishsComponent } from './menu/fishs/fishs.component';
import { MeatsComponent } from './menu/meats/meats.component';
import { DessertsComponent } from './menu/desserts/desserts.component';
import { WinesComponent } from './wines/wines.component';
import { AndalusianWinesComponent } from './wines/andalusian-wines/andalusian-wines.component';
import { RiojaWinesComponent } from './wines/rioja-wines/rioja-wines.component';
import { RiberaWinesComponent } from './wines/ribera-wines/ribera-wines.component';
import { CastillaWinesComponent } from './wines/castilla-wines/castilla-wines.component';
import { AlbariniosComponent } from './wines/albarinios/albarinios.component';
import { RuedaWinesComponent } from './wines/rueda-wines/rueda-wines.component';
import { OlorososComponent } from './wines/olorosos/olorosos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    EntreesComponent,
    ToastsComponent,
    SaladsComponent,
    PastasComponent,
    ScrambledsComponent,
    FishsComponent,
    MeatsComponent,
    DessertsComponent,
    WinesComponent,
    AndalusianWinesComponent,
    RiojaWinesComponent,
    RiberaWinesComponent,
    CastillaWinesComponent,
    AlbariniosComponent,
    RuedaWinesComponent,
    OlorososComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
