import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';

@NgModule({
  declarations: [AppComponent, CardapioComponent, PaginaInicialComponent, MeusDadosComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
