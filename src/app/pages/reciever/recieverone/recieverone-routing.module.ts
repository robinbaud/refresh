import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecieveroneComponent } from './recieverone.component';

const routes: Routes = [
  {path:'', component: RecieveroneComponent},
  {
    path: 'taille',
    loadChildren: () =>
        import('../recievertwo/recievertwo.module').then(m => m.RecievertwoModule),
    data: {
        title: 'PAGES.RECIEVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecieveroneRoutingModule { }
