import { HotelsService } from './../../common/services/hotels.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  // @Input()
  // public data: Hotel;
  public weather: Weather;

  public constructor(
    private _hotelsServices: HotelsService
  ) { }

  public ngOnInit(): void {
    this._hotelsServices.hotel$
      .subscribe((hotel: Hotel) => this.weather = hotel.weather);
  }

}
