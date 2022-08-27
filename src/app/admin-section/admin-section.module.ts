import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSectionPageRoutingModule } from './admin-section-routing.module';

import { AdminSectionPage } from './admin-section.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSectionPageRoutingModule
  ],
  declarations: [AdminSectionPage]
})
export class AdminSectionPageModule {}
