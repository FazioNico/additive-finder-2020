import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ColorPipe } from './pipes/color/color.pipe';
import { LevelPipe } from './pipes/level/level.pipe';



@NgModule({
  declarations: [
    ColorPipe,
    LevelPipe
  ],
  exports: [
    ColorPipe,
    LevelPipe,
    CommonModule,
    IonicModule
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
