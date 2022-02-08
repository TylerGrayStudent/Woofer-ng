import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from './../card/card.module';
import { SwiperComponent } from './swiper.component';

@NgModule({
  declarations: [SwiperComponent],
  imports: [CommonModule, DragDropModule, CardModule],
  exports: [SwiperComponent],
})
export class SwiperModule {}
