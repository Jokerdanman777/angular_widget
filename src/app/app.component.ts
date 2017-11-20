import { Component, OnInit } from '@angular/core';
import { hotels$ } from './data';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public data: any;
  public hotels$: Observable<Hotel[]>;
  public ngOnInit(): void {
    this.hotels$ = hotels$;
  }
  public input(data: any): void {
    this.data = data;
}
}
