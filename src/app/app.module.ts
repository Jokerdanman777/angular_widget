import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FollowerComponent } from './follower/follower.component';
import { MenuComponent } from './menu/menu.component';
import { PhonePipesPipe } from './common/pipes/phone-pipes.pipe';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FollowerComponent,
    MenuComponent,
    PhonePipesPipe,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
