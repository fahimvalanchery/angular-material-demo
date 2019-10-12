import { NgModule } from '@angular/core';

import {MatButtonModule, MatIconModule, MatBadgeModule} from '@angular/material'

const MaterialComponents=[
  MatButtonModule,
  MatIconModule,
  MatBadgeModule
]
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
