import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input()
  public data: Hotel;

  public constructor() { }

  public ngOnInit() {
  }

}
