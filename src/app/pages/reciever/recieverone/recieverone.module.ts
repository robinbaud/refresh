import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecieveroneRoutingModule } from './recieverone-routing.module';
import { RecieveroneComponent } from './recieverone.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    RecieveroneComponent
  ],
  imports: [
    CommonModule,
    RecieveroneRoutingModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule
  ]
})
export class RecieveroneModule { }
