import { Observable } from 'rxjs';

export interface CardData {
  loading$: Observable<boolean>;
  data$: Observable<string>;
}
