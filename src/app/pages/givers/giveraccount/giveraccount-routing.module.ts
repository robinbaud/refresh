import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveraccountComponent } from './giveraccount.component';

const routes: Routes = [
  {path: '', component: GiveraccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiveraccountRoutingModule { }
