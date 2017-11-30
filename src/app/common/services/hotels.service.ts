import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { hotels } from '../../data/index';

@Injectable()
export class HotelsService {

  public hotel$: Subject<Hotel> = new Subject<Hotel>();

  public constructor() { }

  public getHotels(): Observable<Hotel[]> {
    return Observable.of(hotels).pipe(delay(1500));
  }
}
