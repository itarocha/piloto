import {Injectable} from '@angular/core';
//import {SERVER_URL} from './config';
//import {Http, Headers, RequestOptions} from '@angular/http';
//import {Http} from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let SERVER_URL = 'http://stones.petrasistemas.com.br';

@Injectable()
export class EmpresasService {

    loading : boolean;
    data : any;

    constructor (private http:Http) {
    }

    getEmpresas(codusu : number): void{
       this.http.get(SERVER_URL + "/api/empresas/config/"+codusu+"/empresas")
        .subscribe((res: Response) => {
            this.data = res.json();
            this.loading = false;
          });
    }

/*
    handleError(error) {
      //console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
*/
/*
    getEmpresasNew(codusu : number): void {
      //this.loading = true;
      this.http.get('http://jsonplaceholder.typicode.com/posts/1')
               .subscribe((res: Response) => {
                   this.data = res.json();
                   this.loading = false;
                 });
     }
  */

}
