import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtendWarrantyRequestListPage } from './extend-warranty-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: ExtendWarrantyRequestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtendWarrantyRequestListPageRoutingModule {}
