import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { ProfileComponent } from "./profile.component";

const profileRoutes: Routes = [{path: '', component:ProfileComponent}];
export const profileRouting: ModuleWithProviders<Route> = RouterModule.forChild(profileRoutes)