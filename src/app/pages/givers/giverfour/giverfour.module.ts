import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiverfourRoutingModule } from './giverfour-routing.module';
import { GiverfourComponent } from './giverfour.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    GiverfourComponent
  ],
  imports: [
    CommonModule,
    GiverfourRoutingModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule
  ]
})
export class GiverfourModule { }
