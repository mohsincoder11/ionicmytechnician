import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSectionPage } from './admin-section.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSectionPageRoutingModule {}
