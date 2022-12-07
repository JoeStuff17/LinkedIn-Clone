import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { jobsRouting } from './jobs.routes';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    jobsRouting,
    MatDividerModule
    
  ]
})
export class JobsModule { }
