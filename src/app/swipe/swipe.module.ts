import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardModule } from './../shared/card/card.module';
import { SwipePageRoutingModule } from './swipe-routing.module';
import { SwipePage } from './swipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipePageRoutingModule,
    CardModule,
  ],
  declarations: [SwipePage],
})
export class SwipePageModule {}
