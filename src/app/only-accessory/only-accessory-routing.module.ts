import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlyAccessoryPage } from './only-accessory.page';

const routes: Routes = [
  {
    path: '',
    component: OnlyAccessoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlyAccessoryPageRoutingModule {}
