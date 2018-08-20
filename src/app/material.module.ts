import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule, 
  MatListModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';



@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MaterialModule {}