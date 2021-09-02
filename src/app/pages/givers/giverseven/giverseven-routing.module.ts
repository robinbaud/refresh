import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiversevenComponent } from './giverseven.component';

const routes: Routes = [
  {path:'', component: GiversevenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiversevenRoutingModule { }
