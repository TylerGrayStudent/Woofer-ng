import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DogApiService {
  constructor(private http: HttpClient) {}
  getRandomImage(): Observable<string> {
    return this.http
      .get<string>('https://dog.ceo/api/breeds/image/random')
      .pipe(
        map((x: any) => {
          if (x.status === 'success') {
            return x.message;
          } else {
            return '';
          }
        })
      );
  }
}
