import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'widget-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input()
  public hotels: Hotel[];

  @Output()
  public outData: EventEmitter<any> = new EventEmitter<any>();

  public constructor() { }

  public ngOnInit(): void {

    }
public outputData(hotel: Hotel): void {
  this.outData.emit(hotel);
}
}
