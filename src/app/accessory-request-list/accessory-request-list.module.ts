import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessoryRequestListPageRoutingModule } from './accessory-request-list-routing.module';

import { AccessoryRequestListPage } from './accessory-request-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessoryRequestListPageRoutingModule
  ],
  declarations: [AccessoryRequestListPage]
})
export class AccessoryRequestListPageModule {}
