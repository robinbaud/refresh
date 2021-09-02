import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecieverfiveComponent } from './recieverfive.component';

const routes: Routes = [
  {path: '', component: RecieverfiveComponent},
  {
    path: 'remerciement',
    loadChildren: () =>
        import('../recieversix/recieversix.module').then(m => m.RecieversixModule),
    data: {
        title: 'PAGES.RECIEVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecieverfiveRoutingModule { }
