import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecieversixComponent } from './recieversix.component';

const routes: Routes = [
  {path: '', component: RecieversixComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecieversixRoutingModule { }
