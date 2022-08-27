import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { FooterPageModule } from '../footer/footer.module';
import { PipesModule } from '../pipe/imagepipe.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    FooterPageModule,
    PipesModule,
    NgxIonicImageViewerModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
