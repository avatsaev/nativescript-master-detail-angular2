import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";


import { AppComponent } from "./app.component";

import {AppRoutes} from './app.routing';
import {HomeModule} from "./home/home.module";
import {DetailsModule} from "./details/details.module";

import { setStatusBarColors } from "./shared/status_bar_util";

setStatusBarColors();

@NgModule({
  providers: [
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(AppRoutes),
    HomeModule,
    DetailsModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
