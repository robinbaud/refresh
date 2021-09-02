import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GivereightComponent } from './givereight.component';

const routes: Routes = [
  {path:'', component: GivereightComponent},
  {
    path: 'remerciement',
    loadChildren: () =>
        import('../givernine/givernine.module').then(m => m.GivernineModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GivereightRoutingModule { }
