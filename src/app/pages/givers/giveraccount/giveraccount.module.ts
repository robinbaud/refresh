import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveraccountRoutingModule } from './giveraccount-routing.module';
import { GiveraccountComponent } from './giveraccount.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    GiveraccountComponent
  ],
  imports: [
    CommonModule,
    GiveraccountRoutingModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule
  ]
})
export class GiveraccountModule { }
