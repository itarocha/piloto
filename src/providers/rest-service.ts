import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {

  hadIceCream : boolean = false;

  constructor(public http: Http) {
    console.log('constructor RestService Provider');
  }

  getIceCream(){
    this.hadIceCream = true;
    return 'hummm... sorvete!';
  }

}
