import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecieverfiveRoutingModule } from './recieverfive-routing.module';
import { RecieverfiveComponent } from './recieverfive.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    RecieverfiveComponent
  ],
  imports: [
    CommonModule,
    RecieverfiveRoutingModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule
  ]
})
export class RecieverfiveModule { }
