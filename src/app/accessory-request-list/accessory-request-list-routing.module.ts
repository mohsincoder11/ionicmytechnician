import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessoryRequestListPage } from './accessory-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: AccessoryRequestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoryRequestListPageRoutingModule {}
