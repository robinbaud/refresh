import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiverthreeRoutingModule } from './giverthree-routing.module';
import { GiverthreeComponent } from './giverthree.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    GiverthreeComponent
  ],
  imports: [
    CommonModule,
    GiverthreeRoutingModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule
  ]
})
export class GiverthreeModule { }
