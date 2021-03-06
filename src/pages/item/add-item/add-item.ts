import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  titulo : string;
  descricao : string;

  constructor(public nav: NavController, public view: ViewController) {
  }

  salvarItem(){
    let newItem = {
      titulo : this.titulo,
      descricao : this.descricao
    };

    this.view.dismiss(newItem);
  }

  close(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('Hello AddItemPage Page');
  }

}
