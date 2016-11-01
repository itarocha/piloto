import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable()
export class Dados {

  constructor(public storage: Storage) {

  }

  getData() {
      return this.storage.get('todos');
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }

}
