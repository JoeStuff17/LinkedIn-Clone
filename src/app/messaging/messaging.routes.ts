import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { MessagingComponent } from "./messaging.component";

const messagingRoutes: Routes = [{path: '', component:MessagingComponent}];
export const messagingRouting: ModuleWithProviders<Route> = RouterModule.forChild(messagingRoutes)