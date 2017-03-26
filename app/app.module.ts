import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {

}
