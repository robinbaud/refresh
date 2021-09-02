import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GivertwoComponent } from './givertwo.component';

const routes: Routes = [
  {path: '', component: GivertwoComponent},
  {
    path: 'vêtements',
    loadChildren: () =>
        import('../giverthree/giverthree.module').then(m => m.GiverthreeModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GivertwoRoutingModule { }
