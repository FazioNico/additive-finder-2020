import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './containers/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    SharedModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
