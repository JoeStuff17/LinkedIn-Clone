import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { MapComponent } from "./map.component";

const mapRoutes: Routes = [{path: '', component: MapComponent}];
export const mapRouting: ModuleWithProviders<Route> = RouterModule.forChild(mapRoutes)