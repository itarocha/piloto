import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item-page/add-item-page'
import { ItemDetailPage } from '../item-detail-page/item-detail-page';
import { Dados } from '../../providers/dados';

@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public dataService: Dados) {

    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = JSON.parse(todos);
      }
    });
  }

  ionViewDidLoad(){

  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
          if(item){
            this.saveItem(item);
          }
    });
    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}
