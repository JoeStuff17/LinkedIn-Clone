import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { JobsComponent } from "./jobs.component";

const jobsRoutes: Routes = [{path: '', component:JobsComponent}];
export const jobsRouting: ModuleWithProviders<Route> = RouterModule.forChild(jobsRoutes)