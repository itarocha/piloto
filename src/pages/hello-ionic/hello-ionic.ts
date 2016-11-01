import { Component } from '@angular/core';
import { Platform, ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item-page/add-item-page'
import { ItemDetailPage } from '../item-detail-page/item-detail-page';
import { Dados } from '../../providers/dados';
import { RestService } from '../../providers/rest-service'
import { Network } from 'ionic-native';

@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  public items = [];
  public networkstatus : string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public dataService: Dados, public rest: RestService, private platform: Platform) {

    this.checkNetwork();

    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = JSON.parse(todos);
      }
    });
  }

  checkNetwork() {
      this.platform.ready().then(() => {
        console.log("Plataforma pronta");
        this.networkstatus = <string> Network.connection;

          // let alert = Alert.create({
          //     title: "Connection Status",
          //     subTitle: <string> Network.connection,
          //     buttons: ["OK"]
          // });
          // alert.present();

          //this.navCtrl.indexOf.present(alert);

      });
  }

  ionViewDidLoad(){
    if (!this.rest.hadIceCream) {
          this.rest.getIceCream();
          console.log('NOT rest.hadIceCream.ionViewDidLoad');
        } else {
          //this.message = 'Stop hogging all the ice cream =(';
          console.log('YES rest.hadIceCream.ionViewDidLoad');
        }
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
