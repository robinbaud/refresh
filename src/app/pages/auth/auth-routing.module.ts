import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {
    path: 'depot',
    loadChildren: () =>
        import('../givers/giverone/giverone.module').then(m => m.GiveroneModule),
    data: {
        title: 'PAGES.GIVER'
    }
  },
  {
    path: 'message',
    loadChildren: () =>
        import('../message/message.module').then(m => m.MessageModule),
    data: {
        title: 'PAGES.MESSAGE'
    }
  },
  {
    path: 'retrait',
    loadChildren: () =>
        import('../reciever/recieverone/recieverone.module').then(m => m.RecieveroneModule),
    data: {
        title: 'PAGES.RECIEVER'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
