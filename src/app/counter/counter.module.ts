import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { CounterComponent } from "./components/counter.component";


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ],
  imports:[
    BrowserModule,
  ]
})
export class CounterModule{

}
