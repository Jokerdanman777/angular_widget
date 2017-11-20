import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {

  @Input()
  public data: Hotel;

  public constructor() { }

  public ngOnInit() {
  }

}
