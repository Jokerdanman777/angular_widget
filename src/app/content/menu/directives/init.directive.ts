import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelsService } from './../../../common/services/hotels.service';

@Directive({
  selector: '[widgetInit]'
})
export class InitDirective implements OnInit {

  @Input()
  public hotel: Hotel;

  @Input()
  public first: boolean;

  @Output()
  public chooseFirst: EventEmitter<Hotel> = new EventEmitter();

  public constructor (
    private _hotelsServices: HotelsService
  ) {

  }
  public ngOnInit(): void {
    this.first ? this._hotelsServices.hotel$.next(this.hotel) : null;
  }


}
