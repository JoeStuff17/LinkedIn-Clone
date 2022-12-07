import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { notificationRouting } from './notification.routes';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    notificationRouting,
    MatIconModule,
    MatDividerModule
  ]
})
export class NotificationModule { }
