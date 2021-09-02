import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GivernineRoutingModule } from './givernine-routing.module';
import { GivernineComponent } from './givernine.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    GivernineComponent
  ],
  imports: [
    CommonModule,
    GivernineRoutingModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule
  ]
})
export class GivernineModule { }
