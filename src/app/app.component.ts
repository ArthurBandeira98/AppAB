import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuario: any = {nome: 'Arthur Bandeira', email: 'arthur.baandeira@hotmail.com'};


  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Cardápio', url: 'cardapio', icon: 'fast-food' },
    { title: 'Meus Pedidos', url: '/folder/Meus Pedidos', icon: 'cart' },
    { title: 'Meus Dados', url: '/folder/Meus Dados', icon: 'person' },
    { title: 'Sair', url: '/folder/Trash', icon: 'log-out' },
  ];

  constructor() {}
}
