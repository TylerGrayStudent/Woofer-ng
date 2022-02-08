import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardData } from '../../models/card-data';
import { DogApiService } from './../../services/services/dog-api.service';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  cards = [];
  cards$: Array<Observable<CardData>> = [];
  constructor(private dogApi: DogApiService) {}
  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      const card = {
        loading$: of(true),
        data$: of(''),
      };
      this.dogApi.getRandomImage().subscribe((x: any) => {
        card.loading$ = of(false);
        card.data$ = of(x);
      });
      this.cards.push(card);
    }
  }
}
