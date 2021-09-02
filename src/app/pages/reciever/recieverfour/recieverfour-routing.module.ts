import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecieverfourComponent } from './recieverfour.component';

const routes: Routes = [
  {path:'', component: RecieverfourComponent},
  {
    path: 'panier',
    loadChildren: () =>
        import('../recieverfive/recieverfive.module').then(m => m.RecieverfiveModule),
    data: {
        title: 'PAGES.RECIEVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecieverfourRoutingModule { }
