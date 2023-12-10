import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent, ProfileDialogComponent } from './profile.component';
import { profileRouting } from './profile.routes';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    ProfileComponent, ProfileDialogComponent
  ],
  imports: [
    CommonModule,
    profileRouting,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule
  ]
})
export class ProfileModule { }
