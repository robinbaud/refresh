import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecieverthreeComponent } from './recieverthree.component';

const routes: Routes = [
  {path: '', component: RecieverthreeComponent},
  {
    path: 'validation',
    loadChildren: () =>
    import('../recieverfour/recieverfour.module').then(m => m.RecieverfourModule),
    data: {
      title: 'PAGES.RECIEVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecieverthreeRoutingModule { }
