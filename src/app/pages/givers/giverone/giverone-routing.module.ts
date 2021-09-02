import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveroneComponent } from './giverone.component';

const routes: Routes = [
  {path: '', component: GiveroneComponent},
  {
    path: 'lot',
    loadChildren: () =>
        import('../givertwo/givertwo.module').then(m => m.GivertwoModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
  {
    path: 'account',
    loadChildren: () =>
        import('../giveraccount/giveraccount.module').then(m => m.GiveraccountModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiveroneRoutingModule { }
