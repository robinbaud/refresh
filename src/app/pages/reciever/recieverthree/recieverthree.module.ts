import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecieverthreeRoutingModule } from './recieverthree-routing.module';
import { RecieverthreeComponent } from './recieverthree.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    RecieverthreeComponent
  ],
  imports: [
    CommonModule,
    RecieverthreeRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
  ]
})
export class RecieverthreeModule { }
