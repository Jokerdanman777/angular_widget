import { HotelsService } from './../../../common/services/hotels.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public hotels$: Observable<Hotel[]>;

  public constructor(
    private _hotelsServices: HotelsService
  ) { }

  public ngOnInit(): void {
    this.hotels$ = this._hotelsServices.getHotels();
  }
  public changeHotel(hotel: Hotel): void {
    this._hotelsServices.hotel$.next(hotel);
  // this.outData.emit(hotel);
}
}
