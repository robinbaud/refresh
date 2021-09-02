import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiverthreeComponent } from './giverthree.component';

const routes: Routes = [
  {path: '', component: GiverthreeComponent},
  {
    path: 'taille',
    loadChildren: () =>
        import('../giverfour/giverfour.module').then(m => m.GiverfourModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiverthreeRoutingModule { }
