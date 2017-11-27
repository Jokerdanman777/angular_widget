import { HotelsService } from './../../common/services/hotels.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'widget-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // @Input()
  // public hotels: Hotel[];

  // @Output()
  // public outData: EventEmitter<any> = new EventEmitter<any>();
  public hotels$: Observable<Hotel[]>;
  public hotel: Hotel;
  public constructor(
    private _hotelsServices: HotelsService
  ) { }

  public ngOnInit(): void {
    this.hotels$ = this._hotelsServices.getHotels();
    }
public changeHotel(hotel: Hotel): void {
  this._hotelsServices.hotel$.next(this.hotel);
  // this.outData.emit(hotel);
}
}
