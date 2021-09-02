import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecievertwoComponent } from './recievertwo.component';

const routes: Routes = [
  {path: '', component: RecievertwoComponent},
  {
    path: 'selection',
    loadChildren: () =>
    import('../recieverthree/recieverthree.module').then(m => m.RecieverthreeModule),
    data: {
      title: 'PAGES.RECIEVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecievertwoRoutingModule { }
