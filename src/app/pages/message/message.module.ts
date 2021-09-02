import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule, } from 'ng-zorro-antd/grid';
import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzFormModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MessageModule { }
