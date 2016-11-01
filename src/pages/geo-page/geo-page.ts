import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-geo-page',
  templateUrl: 'geo-page.html'
})
export class GeoPage {

  lat : number;
  lng : number;

  constructor(public navCtrl: NavController) {
    Geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Erro ao recuperar geolocalização ', error);
    });
  }

  ionViewDidLoad() {
    console.log('Hello GeoPage Page');
  }

}
