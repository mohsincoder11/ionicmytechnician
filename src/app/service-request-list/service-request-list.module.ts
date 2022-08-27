import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceRequestListPageRoutingModule } from './service-request-list-routing.module';

import { ServiceRequestListPage } from './service-request-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceRequestListPageRoutingModule
  ],
  declarations: [ServiceRequestListPage]
})
export class ServiceRequestListPageModule {}
