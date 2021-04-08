import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'paginaInicial',
    pathMatch: 'full'
  },
  {
    path: 'cardapio', component: CardapioComponent
  },
  {
    path: 'paginaInicial', component: PaginaInicialComponent
  },
  {
    path: 'meusDados', component: MeusDadosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
