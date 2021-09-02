import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecievertwoRoutingModule } from './recievertwo-routing.module';
import { RecievertwoComponent } from './recievertwo.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    RecievertwoComponent
  ],
  imports: [
    CommonModule,
    RecievertwoRoutingModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule
  ]
})
export class RecievertwoModule { }
