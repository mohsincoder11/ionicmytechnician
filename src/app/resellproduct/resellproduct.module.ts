import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResellproductPageRoutingModule } from './resellproduct-routing.module';

import { ResellproductPage } from './resellproduct.page';
import { PipesModule } from '../pipe/imagepipe.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResellproductPageRoutingModule,
    PipesModule,
    NgxIonicImageViewerModule
  ],
  declarations: [ResellproductPage]
})
export class ResellproductPageModule {}
