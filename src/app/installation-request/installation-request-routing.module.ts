import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationRequestPage } from './installation-request.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationRequestPageRoutingModule {}
