import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiverfourComponent } from './giverfour.component';

const routes: Routes = [
  {path: '', component: GiverfourComponent},
  {
    path: 'photo',
    loadChildren: () =>
        import('../giverfive/giverfive.module').then(m => m.GiverfiveModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiverfourRoutingModule { }
