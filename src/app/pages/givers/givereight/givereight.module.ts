import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GivereightRoutingModule } from './givereight-routing.module';
import { GivereightComponent } from './givereight.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    GivereightComponent
  ],
  imports: [
    CommonModule,
    GivereightRoutingModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule
  ]
})
export class GivereightModule { }
