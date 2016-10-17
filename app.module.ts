import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";

import { AppRoutes } from './app.routing';
import { HomeModule } from "./home/home.module";
import { DetailsModule } from "./details/details.module";

import { DataService } from "./shared/data.service";

@NgModule({
  providers: [
    DataService
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
