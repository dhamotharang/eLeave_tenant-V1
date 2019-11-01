import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxSpinnerModule } from 'ngx-spinner';

import { UserDropDownComponent } from './layout/user-drop-down/user-drop-down.component';
import { ChangeProfilePhotoComponent } from './layout/user-drop-down/change-profile-photo/change-profile-photo.component';
import { SnackBarComponent } from './layout/notificationPopup/snack-bar/snack-bar.component';

@NgModule({
  declarations: [AppComponent, UserDropDownComponent, ChangeProfilePhotoComponent, SnackBarComponent],
  entryComponents: [UserDropDownComponent, ChangeProfilePhotoComponent, SnackBarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    IonicModule.forRoot({mode: 'md'}),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
