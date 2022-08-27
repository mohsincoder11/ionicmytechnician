import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationRequestListPageRoutingModule } from './installation-request-list-routing.module';

import { InstallationRequestListPage } from './installation-request-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationRequestListPageRoutingModule
  ],
  declarations: [InstallationRequestListPage]
})
export class InstallationRequestListPageModule {}
