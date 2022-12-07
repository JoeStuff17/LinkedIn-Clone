import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {    
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {    
    path:'network',
    loadChildren: () => import('./network/network.module').then(m => m.NetworkModule)
  },
  {    
    path:'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
  },
  {    
    path:'messaging',
    loadChildren: () => import('./messaging/messaging.module').then(m => m.MessagingModule)
  },
  {    
    path:'notification',
    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
