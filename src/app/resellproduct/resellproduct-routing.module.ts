import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResellproductPage } from './resellproduct.page';

const routes: Routes = [
  {
    path: '',
    component: ResellproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResellproductPageRoutingModule {}
