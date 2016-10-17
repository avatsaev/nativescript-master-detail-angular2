import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DetailsComponent } from "./details.component";

const detailsRoutes: Routes = [
  { path: "details/:id", component: DetailsComponent },
];
export const detailsRouting: ModuleWithProviders = RouterModule.forChild(detailsRoutes);