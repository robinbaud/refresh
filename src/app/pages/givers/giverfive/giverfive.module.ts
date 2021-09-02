import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiverfiveRoutingModule } from './giverfive-routing.module';
import { GiverfiveComponent } from './giverfive.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    GiverfiveComponent
  ],
  imports: [
    CommonModule,
    GiverfiveRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule
  ]
})
export class GiverfiveModule { }
