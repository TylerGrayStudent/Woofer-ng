import { Component } from '@angular/core';
import { DogApiService } from '../services/services/dog-api.service';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.page.html',
  styleUrls: ['./swipe.page.scss'],
})
export class SwipePage {
  currImage$ = this.dogApi.getRandomImage();
  constructor(private dogApi: DogApiService) {}
  refresh = () => (this.currImage$ = this.dogApi.getRandomImage());
}
