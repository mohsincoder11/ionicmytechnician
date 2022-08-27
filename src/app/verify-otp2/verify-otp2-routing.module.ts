import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyOtp2Page } from './verify-otp2.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyOtp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyOtp2PageRoutingModule {}
