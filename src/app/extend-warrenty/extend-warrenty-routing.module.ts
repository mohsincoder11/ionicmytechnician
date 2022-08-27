import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtendWarrentyPage } from './extend-warrenty.page';

const routes: Routes = [
  {
    path: '',
    component: ExtendWarrentyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtendWarrentyPageRoutingModule {}
