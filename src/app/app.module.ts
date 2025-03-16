import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"goair-fcm","appId":"1:485424992997:web:4a5a74b1b941a2ea093a0c","storageBucket":"goair-fcm.firebasestorage.app","apiKey":"AIzaSyCbitWscKqUdRWe9tlo1lO3C2kpB128Hew","authDomain":"goair-fcm.firebaseapp.com","messagingSenderId":"485424992997"})),
    provideMessaging(() => getMessaging()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
