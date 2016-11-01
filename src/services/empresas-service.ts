import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

let SERVER_URL = 'http://stones.petrasistemas.com.br';

@Injectable()
export class EmpresasService {

    constructor (private http:Http) {
    }

    getEmpresas(codusu: number){
      return this.http
        .get(SERVER_URL + "/api/empresas/config/"+codusu+"/empresas")
        .map(res => res.json())
        .catch(this.handleError);
    }


    handleError(error) {
      //console.error(error);
      return "x"; //Observable.throw(error.json().error || 'Server error');
    }

}
