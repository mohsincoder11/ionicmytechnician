import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtendWarrentyPageRoutingModule } from './extend-warrenty-routing.module';

import { ExtendWarrentyPage } from './extend-warrenty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtendWarrentyPageRoutingModule
  ],
  declarations: [ExtendWarrentyPage]
})
export class ExtendWarrentyPageModule {}
