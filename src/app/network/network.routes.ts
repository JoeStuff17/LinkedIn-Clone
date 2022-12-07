import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { NetworkComponent } from "./network.component";

const networkRoutes: Routes = [{path: '', component:NetworkComponent}];
export const networkRouting: ModuleWithProviders<Route> = RouterModule.forChild(networkRoutes)