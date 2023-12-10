import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, UserDialogComponent } from './home.component';
import { homeRouting } from './home.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    HomeComponent, UserDialogComponent,
  ],
  imports: [
    homeRouting,
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [
    MatSidenav,
    MatSidenavContent
  ],

})
export class HomeModule { }
