import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FollowerComponent } from './follower/follower.component';
import { MenuComponent } from './menu/menu.component';
import { PhonePipesPipe } from './common/pipes/phone-pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FollowerComponent,
    MenuComponent,
    PhonePipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
