import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationRequestPageRoutingModule } from './installation-request-routing.module';

import { InstallationRequestPage } from './installation-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationRequestPageRoutingModule
  ],
  declarations: [InstallationRequestPage]
})
export class InstallationRequestPageModule {}
