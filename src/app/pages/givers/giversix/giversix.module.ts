import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiversixRoutingModule } from './giversix-routing.module';
import { GiversixComponent } from './giversix.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    GiversixComponent
  ],
  imports: [
    CommonModule,
    GiversixRoutingModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule
  ]
})
export class GiversixModule { }
