import { mapRouting } from './map.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    mapRouting
  ]
})
export class MapModule { }
