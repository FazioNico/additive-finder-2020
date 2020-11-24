import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './containers/list-page/list-page.component';
import { ItemPageComponent } from './containers/item-page/item-page.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListPageComponent,
    ItemPageComponent
  ],
  imports: [
    SharedModule,
    ListRoutingModule
  ]
})
export class ListModule { }
