import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiverfiveComponent } from './giverfive.component';

const routes: Routes = [
  {path: '', component: GiverfiveComponent},
  {
    path: 'compte',
    loadChildren: () =>
        import('../giversix/giversix.module').then(m => m.GiversixModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiverfiveRoutingModule { }
