import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { HelloIonicPage } from '../../pages/hello-ionic/hello-ionic';
import { RepositorioService } from '../../providers/repositorio-service';
import { EmpresasService } from '../../services/empresas-service';
//import {ElasticHeader} from '../../directives/elastic-header';


@Component({
  templateUrl: 'empresas.html',
  providers: [EmpresasService]
})
export class EmpresasPage {

  public empresas : any;
  showLoading : boolean = false;

  constructor(private nav: NavController,
              public rep: RepositorioService,
              private empresasService: EmpresasService)
  {
    this.loadEmpresas();
  }

  loadEmpresas(){
    this.showLoading = true;
    this.empresasService.getEmpresas(1).subscribe(
      x => this.onLoadEmpresas(x),
      err => console.log(err)
    );
  }

  onLoadEmpresas(data){
    this.empresas = data;
    this.showLoading = false;
  }

  selecionar(codemp: number, nomemp : string) {
    //this.rootPage = page;
    this.rep.setCodEmp(codemp);
    this.rep.setNomEmp(nomemp);
    // this.nav.present(Alert.create({
    //     title: "empresas/selecionar",
    //     subTitle: codemp,
    //     buttons: ["Close"]
    // }));

    //this.nav.push(HomePage,{codemp: codemp});
    this.nav.setRoot(HelloIonicPage,{codemp: codemp});
  }


}
