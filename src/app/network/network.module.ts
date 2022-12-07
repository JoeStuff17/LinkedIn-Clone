import { networkRouting } from './network.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkComponent } from './network.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NetworkComponent
  ],
  imports: [
    CommonModule,
    networkRouting,
    MatDividerModule,
    MatIconModule
  ]
})
export class NetworkModule { }
