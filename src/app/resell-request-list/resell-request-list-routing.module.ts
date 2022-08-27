import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResellRequestListPage } from './resell-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: ResellRequestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResellRequestListPageRoutingModule {}
