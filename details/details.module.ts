import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { detailsRouting } from "./details.routing";
import { DetailsComponent } from "./details.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    detailsRouting
  ],
  declarations: [
    DetailsComponent
  ]
})
export class DetailsModule { }