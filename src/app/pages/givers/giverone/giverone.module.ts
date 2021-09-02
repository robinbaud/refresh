import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveroneRoutingModule } from './giverone-routing.module';
import { GiveroneComponent } from './giverone.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    GiveroneComponent
  ],
  imports: [
    CommonModule,
    GiveroneRoutingModule,
    NzGridModule,
    NzButtonModule
  ]
})
export class GiveroneModule { }
