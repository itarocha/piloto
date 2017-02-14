import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  titulo;
  descricao;

  constructor(public navParams: NavParams){
  }

  ionViewDidLoad() {
    this.titulo = this.navParams.get('item').titulo;
    this.descricao = this.navParams.get('item').descricao;
  }
}
