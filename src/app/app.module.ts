import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
import { UpdatesNotificationComponent } from './components/updates-notification/updates-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdatesNotificationComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) // enable pwa support
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
