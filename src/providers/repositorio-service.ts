import {Injectable} from '@angular/core';
//import {LocalStorage, Storage} from 'ionic-angular';


@Injectable()
export class RepositorioService {

  private local;
  //private codEmpresa;
  public variavel : string = "teste";
  public selecionouEmpresa : boolean = false;
  public codemp : number = -2
  public nomemp : string = "";

  constructor(){
    //this.local = new Storage(LocalStorage);
    this.selecionouEmpresa = false;
  }

  setCodEmp(newValue : number){
    this.codemp = newValue;
    console.log("Mudando codemp para "+newValue);
    this.selecionouEmpresa = true;
  }

  setNomEmp(newValue : string){
    this.nomemp = newValue;
    console.log("Mudando nomemp para "+newValue);
  }

  getValue(item: String, callback){

    let dataPromise = this.local.get(item);

    dataPromise.then(data => {
      callback(data);
    });
  }


  setValue(item: String, value: String){
    this.local.set(item, value).then(retorno => {

    });
  }

}
