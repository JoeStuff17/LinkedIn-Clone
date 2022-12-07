import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';
import { messagingRouting } from './messaging.routes';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    MessagingComponent
  ],
  imports: [
    CommonModule,
    messagingRouting,
    MatIconModule,
    MatDividerModule
  ]
})
export class MessagingModule { }
