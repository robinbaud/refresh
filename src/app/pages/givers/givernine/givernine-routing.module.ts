import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GivernineComponent } from './givernine.component';

const routes: Routes = [
  {path: '', component: GivernineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GivernineRoutingModule { }
