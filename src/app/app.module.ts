import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { EntreesComponent } from './entrees/entrees.component';
import { ToastsComponent } from './toasts/toasts.component';
import { SaladsComponent } from './salads/salads.component';
import { PastasComponent } from './pastas/pastas.component';
import { ScrambledsComponent } from './scrambleds/scrambleds.component';
import { FishsComponent } from './fishs/fishs.component';
import { MeatsComponent } from './meats/meats.component';

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
    MeatsComponent
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
