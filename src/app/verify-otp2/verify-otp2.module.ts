import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyOtp2PageRoutingModule } from './verify-otp2-routing.module';

import { VerifyOtp2Page } from './verify-otp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyOtp2PageRoutingModule
  ],
  declarations: [VerifyOtp2Page]
})
export class VerifyOtp2PageModule {}
