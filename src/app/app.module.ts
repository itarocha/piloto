import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/default/home/home';
import { ItemDetailsPage } from '../pages/item/item-details/item-details';
import { EmpresasPage } from '../pages/default/empresas/empresas';
import { ListPage } from '../pages/item/list/list';

import { AddItemPage } from '../pages/item/add-item/add-item';
import { ItemDetailPage } from '../pages/item/item-detail/item-detail';
import { CheckListPage } from '../pages/default/check-list/check-list';
import { GeoPage } from '../pages/default/geo/geo';


import {RepositorioService} from '../providers/repositorio-service';
import {Storage} from '@ionic/storage';
import {Dados} from '../providers/dados';
import {RestService} from '../providers/rest-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    AddItemPage,
    ItemDetailPage,
    EmpresasPage,
    CheckListPage,
    GeoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    AddItemPage,
    ItemDetailPage,
    EmpresasPage,
    CheckListPage,
    GeoPage
  ],
  providers: [RepositorioService, Storage, Dados, RestService]
})
export class AppModule {}
