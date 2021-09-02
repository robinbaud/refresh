import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiversixComponent } from './giversix.component';

const routes: Routes = [
  {path:'', component: GiversixComponent},
  {
    path: 'creation',
    loadChildren: () =>
        import('../giverseven/giverseven.module').then(m => m.GiversevenModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
  {
    path: 'validation',
    loadChildren: () =>
        import('../givereight/givereight.module').then(m => m.GivereightModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiversixRoutingModule { }
