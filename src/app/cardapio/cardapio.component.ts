import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CardapioService } from '../service/cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent implements OnInit{

  private produtos = [];

  constructor(
    public alertController: AlertController,
    private cardapioService: CardapioService
    ) { }

  ngOnInit() {
    this.cardapioService.buscaCardapio();
    this.produtos = [
      { nome: 'Mussarela', valor: 'R$ 10,00', descricao: 'Queijo, tomato e azeitona', quantidade: 0 },
      { nome: 'Portuguesa', valor: 'R$ 10,00', descricao: 'Queijo, ovo, presunto, palmito e azeitona', quantidade: 0 },
      { nome: 'Bacon', valor: 'R$ 10,00', descricao: 'Queijo, bacon e azeitona', quantidade: 0 },
      { nome: 'Calabresa', valor: 'R$ 10,00', descricao: 'Calabresa e cebola', quantidade: 0 },
      { nome: 'Quatro queijos', valor: 'R$ 10,00', descricao: 'Quatro queijos', quantidade: 0 },
      { nome: 'Chilena', valor: 'R$ 15,00', descricao: 'Queijo, calabresa, e etc', quantidade: 0 },
      { nome: 'Espanhola', valor: 'R$ 20,00', descricao: 'Queijo, etc, etc', quantidade: 0 },
      { nome: 'Vegetariana', valor: 'R$ 10,00', descricao: 'Queijo, só', quantidade: 0 },
      { nome: 'Frango', valor: 'R$ 10,00', descricao: 'Frango', quantidade: 0 },
      { nome: 'Frango c/ Catupiry', valor: 'R$ 10,00', descricao: 'Frango e Catupiry', quantidade: 0 },
      { nome: 'Peperone', valor: 'R$ 10,00', descricao: 'Queijo, Peperone', quantidade: 0 },
      { nome: 'Boliviana', valor: 'R$ 10,00', descricao: 'Queijo, sla', quantidade: 0 },
      { nome: 'Lombo', valor: 'R$ 10,00', descricao: 'Queijo, lombo e azeitona', quantidade: 0 },
    ];
  }

  aumentar(nome: any) {
    this.produtos.find((p: any) => {
        if (p.nome === nome) {
          p.quantidade = p.quantidade + 1;
        }
    });
  }

  diminuir(nome: any) {
    this.produtos.find((p: any) => {
      if (p.nome === nome) {
        p.quantidade = p.quantidade < 0 ? 0 : p.quantidade - 1;
      }
  });
  }

  addCarrinho() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Info',
      subHeader: 'Item adicionado!',
      message: 'O item foi adicionado no carrinho.',
      buttons: ['OK']
    });

    await alert.present();
  }


}
