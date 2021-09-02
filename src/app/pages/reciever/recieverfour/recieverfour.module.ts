import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecieverfourRoutingModule } from './recieverfour-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RecieverfourComponent } from './recieverfour.component';


@NgModule({
  declarations: [
    RecieverfourComponent
  ],
  imports: [
    CommonModule,
    RecieverfourRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class RecieverfourModule { }
