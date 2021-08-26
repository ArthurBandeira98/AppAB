import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cardapio } from '../model/cardapio';
import { CardapioService } from '../service/cardapio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent implements OnInit{

  produtos: Cardapio[];

  constructor(
    public alertController: AlertController,
    private cardapioService: CardapioService
    ) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos() {
    this.cardapioService.getCardapio().subscribe((data: Cardapio[]) => {
      console.log(data);
      this.produtos = data;
    });
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
