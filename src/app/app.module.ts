import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"goair-fcm","appId":"1:485424992997:web:4a5a74b1b941a2ea093a0c","storageBucket":"goair-fcm.firebasestorage.app","apiKey":"AIzaSyCbitWscKqUdRWe9tlo1lO3C2kpB128Hew","authDomain":"goair-fcm.firebaseapp.com","messagingSenderId":"485424992997"})),
    provideMessaging(() => getMessaging())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
