import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloIonicPage } from '../../pages/hello-ionic/hello-ionic';

@Component({
  selector: 'page-check-list-page',
  templateUrl: 'check-list-page.html'
})
export class CheckListPage {

  lista : Array<{id: number, descricao: string, selecionado: boolean}>;

  constructor(public nav: NavController) {
    this.lista = [];
    this.lista.push({id:145, descricao: 'Regar as plantas', selecionado:false});
    this.lista.push({id:827, descricao: 'Semear a boa semente', selecionado:false});
    this.lista.push({id:302, descricao: 'Podar as árvores', selecionado:true});
    this.lista.push({id:940, descricao: 'Debulhar o trigo', selecionado:false});
    this.lista.push({id:125, descricao: 'Colher as flores', selecionado:true});
  }

  ionViewDidLoad() {
    console.log('Hello CheckListPage Page');
  }

  itemChange(objeto, index, item){
    this.lista[index].selecionado = objeto.checked;

    console.log('ionChange : #'+index+' - '+item.id+'-"'+item.descricao+'".checked: '+objeto.checked);
  }

  gravar(){

    // let newItem = {
    //   titulo : this.titulo,
    //   descricao : this.descricao
    // };
    //
    // this.view.dismiss(newItem);
    console.log("Gravando...");
    this.nav.setRoot(HelloIonicPage);
  }


}
