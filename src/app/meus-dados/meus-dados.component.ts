import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.scss'],
})
export class MeusDadosComponent implements OnInit {

  private desabilitar = false;
  private usuario: any = {
    nome: 'Arthur Bandeira',
    email: 'arthur.baandeira@hotmail.com',
    telefone: '(11) 99999-9999'

  };

  constructor() { }

  ngOnInit() {
  }

  habilitaCampos() {
    this.desabilitar = true;
  }

  saveForm(form) {
    console.log(form);
  }

}
