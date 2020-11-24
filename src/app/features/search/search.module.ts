import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './containers/search-page/search-page.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
