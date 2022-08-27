import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtendWarrantyRequestListPageRoutingModule } from './extend-warranty-request-list-routing.module';

import { ExtendWarrantyRequestListPage } from './extend-warranty-request-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtendWarrantyRequestListPageRoutingModule
  ],
  declarations: [ExtendWarrantyRequestListPage]
})
export class ExtendWarrantyRequestListPageModule {}
