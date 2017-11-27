import { HotelsService } from './../../common/services/hotels.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {

  // @Input()
  // public data: Hotel;
  public socialInfo: Social_info;
  public constructor(
    private _hotelsServices: HotelsService
  ) { }

  public ngOnInit(): void {
    this._hotelsServices.hotel$
      .subscribe((hotel: Hotel) => this.socialInfo = hotel.social_info);
  }

}
