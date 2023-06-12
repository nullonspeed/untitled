import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  dataStream$: Observable<number> = of(1, 2, 3, 4, 5);

  transformedStream$: Observable<number> = this.dataStream$.pipe(
    filter(num => num % 2 === 0),
    map(num => num * 2)
  );

  constructor() {

  }
}
