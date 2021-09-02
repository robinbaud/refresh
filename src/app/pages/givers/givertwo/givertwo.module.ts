import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GivertwoRoutingModule } from './givertwo-routing.module';
import { GivertwoComponent } from './givertwo.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    GivertwoComponent
  ],
  imports: [
    CommonModule,
    GivertwoRoutingModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule
  ]
})
export class GivertwoModule { }
