import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationRequestListPage } from './installation-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationRequestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationRequestListPageRoutingModule {}
