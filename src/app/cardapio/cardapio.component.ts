import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent implements OnInit{

  private quantidade: number;
  private produtos = [];

  constructor() { }

  ngOnInit() {
    this.quantidade = 0;
    this.produtos = [
      { nome: 'Mussarela', valor: 'R$ 10,00', descricao: 'Queijo, tomato e azeitona' },
      { nome: 'Portuguesa', valor: 'R$ 10,00', descricao: 'Queijo, ovo, presunto, palmito e azeitona' },
      { nome: 'Bacon', valor: 'R$ 10,00', descricao: 'Queijo, bacon e azeitona' },
      { nome: 'Calabresa', valor: 'R$ 10,00', descricao: 'Calabresa e cebola' },
      { nome: 'Quatro queijos', valor: 'R$ 10,00', descricao: 'Quatro queijos' },
      { nome: 'Chilena', valor: 'R$ 15,00', descricao: 'Queijo, calabresa, e etc' },
      { nome: 'Espanhola', valor: 'R$ 20,00', descricao: 'Queijo, etc, etc' },
      { nome: 'Vegetariana', valor: 'R$ 10,00', descricao: 'Queijo, só' },
      { nome: 'Frango', valor: 'R$ 10,00', descricao: 'Frango' },
      { nome: 'Frango c/ Catupiry', valor: 'R$ 10,00', descricao: 'Frango e Catupiry' },
      { nome: 'Peperone', valor: 'R$ 10,00', descricao: 'Queijo, Peperone' },
      { nome: 'Boliviana', valor: 'R$ 10,00', descricao: 'Queijo, sla' },
      { nome: 'Lombo', valor: 'R$ 10,00', descricao: 'Queijo, lombo e azeitona' },
    ];
  }


}
