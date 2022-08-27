import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResellRequestListPageRoutingModule } from './resell-request-list-routing.module';

import { ResellRequestListPage } from './resell-request-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResellRequestListPageRoutingModule
  ],
  declarations: [ResellRequestListPage]
})
export class ResellRequestListPageModule {}
