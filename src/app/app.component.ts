import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public usuario: any = {nome: 'Arthur Bandeira', email: 'arthur.baandeira@hotmail.com'};

  public appPages = [
    { title: 'Inicio', url: 'paginaInicial', icon: 'home' },
    { title: 'Cardápio', url: 'cardapio', icon: 'fast-food' },
    { title: 'Meus Pedidos', url: 'meuspedidos', icon: 'cart' },
    { title: 'Meus Dados', url: 'meusDados', icon: 'person' },
    { title: 'Funcionarios', url: 'funcionarios', icon: 'person' },
    { title: 'Sair', url: '/folder/Trash', icon: 'log-out' },
  ];

  constructor() {}
}
