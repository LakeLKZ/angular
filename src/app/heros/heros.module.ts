import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  imports:[
    BrowserModule,
  ]
})
export class HerosModule{

}
