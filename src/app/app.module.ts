import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { EmpresasPage } from '../pages/empresas/empresas';
import { ListPage } from '../pages/list/list';
import { AddItemPage } from '../pages/add-item-page/add-item-page';
import { ItemDetailPage } from '../pages/item-detail-page/item-detail-page';
import { CheckListPage } from '../pages/check-list-page/check-list-page';


import {RepositorioService} from '../providers/repositorio-service';
import {Storage} from '@ionic/storage';
import {Dados} from '../providers/dados';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AddItemPage,
    ItemDetailPage,
    EmpresasPage,
    CheckListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AddItemPage,
    ItemDetailPage,
    EmpresasPage,
    CheckListPage
  ],
  providers: [RepositorioService, Storage, Dados]
})
export class AppModule {}
