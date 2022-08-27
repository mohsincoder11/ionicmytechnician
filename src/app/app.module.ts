import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe,CommonModule } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CallNumber } from "@ionic-native/call-number/ngx";
import { PipesModule } from './pipe/imagepipe.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    PipesModule,
    NgxIonicImageViewerModule
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    DatePipe,
    CallNumber,

    SocialSharing,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
