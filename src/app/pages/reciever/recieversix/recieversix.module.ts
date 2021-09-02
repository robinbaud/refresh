import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecieversixRoutingModule } from './recieversix-routing.module';
import { RecieversixComponent } from './recieversix.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    RecieversixComponent
  ],
  imports: [
    CommonModule,
    RecieversixRoutingModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class RecieversixModule { }
