import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiversevenRoutingModule } from './giverseven-routing.module';
import { GiversevenComponent } from './giverseven.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    GiversevenComponent
  ],
  imports: [
    CommonModule,
    GiversevenRoutingModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule
  ]
})
export class GiversevenModule { }
