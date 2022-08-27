import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlyAccessoryPageRoutingModule } from './only-accessory-routing.module';

import { OnlyAccessoryPage } from './only-accessory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlyAccessoryPageRoutingModule
  ],
  declarations: [OnlyAccessoryPage]
})
export class OnlyAccessoryPageModule {}
