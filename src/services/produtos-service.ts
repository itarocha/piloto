import {Injectable} from '@angular/core';
//import {SERVER_URL} from './config';
//import {Http, Headers, RequestOptions} from '@angular/http';
//import {Http} from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let SERVER_URL : string = 'http://go.com.br';

@Injectable()
export class ProdutosService {

    loading : boolean;
    data : any;

    constructor (public http:Http) {
      this.loading = false;
    }

    makeRequest(codemp: number): void {
      this.loading = true;
      this.http.request(SERVER_URL + "/api/empresas/"+codemp+"/funcionarios")
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
      }

    makePost(): void {
      this.loading = true;
      this.http.post( 'http://jsonplaceholder.typicode.com/posts',
                      JSON.stringify({
                          body: 'bar',
                          title: 'foo',
                          userId: 1
                        }))
                        .subscribe((res: Response) => {
                            this.data = res.json();
                            this.loading = false;
                          });
     }

     makeDelete(): void {
       this.loading = true;
       this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
          .subscribe((res: Response) => {
              this.data = res.json();
              this.loading = false;
            });
      }


    makeHeaders(): void {
      let headers: Headers = new Headers();
      headers.append('X-API-TOKEN', 'ng-book');

      let opts: RequestOptions = new RequestOptions();
      opts.headers = headers;

      this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
        .subscribe((res: Response) => {
            this.data = res.json();
          });
    }

    // getListagemPorEmpresa(codemp: number){
    //   return this.http
    //     .get(SERVER_URL + "/api/empresas/"+codemp+"/funcionarios")
    //     .success(function(data, status){
    //
    //     });
    // }

    // getFuncionariosPorEmpresaSecao(codemp: number, codsec: number){
    //   return this.http
    //     .get(SERVER_URL + "/api/empresas/"+codemp+"/"+codsec+"/funcionarios")
    //     //.map(res => res.json())
    //     .data(res => res.json())
    //     .catch(this.xhandleError);
    // }
    //
    // getFuncionariosPorEmpresaSecaoFuncao(codemp: number, codsec: number, codprf: number){
    //   return this.http
    //     .get(SERVER_URL + "/api/empresas/"+codemp+"/"+codsec+"/"+codprf+"/funcionarios")
    //     .map(res => res.json())
    //     .catch(this.xhandleError);
    // }
    //
    // protected xhandleError(error) {
    //    console.error(error);
    //    return Observable.throw(error.json().error || 'Server error');
    // }
}
