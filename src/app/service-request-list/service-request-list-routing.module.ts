import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceRequestListPage } from './service-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceRequestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRequestListPageRoutingModule {}
