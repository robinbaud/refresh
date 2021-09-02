import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    AuthRoutingModule,
    NzGridModule
  ]
})
export class AuthModule { }
