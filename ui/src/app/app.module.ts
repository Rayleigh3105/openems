import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { environment } from '../environments';

// modules
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { OverviewModule } from './overview/overview.module';
import { EdgeModule } from './edge/edge.module';
import { ConfigModule } from './config/config.module';

// components
import { AppComponent } from './app.component';

// services
import { Websocket, Service } from './shared/shared';
import { MyTranslateLoader } from './shared/translate/translate';

// locale Data
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localDE from '@angular/common/locales/de';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AboutModule,
    EdgeModule,
    ConfigModule,
    OverviewModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: MyTranslateLoader }
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {
      provide: ErrorHandler,
      useExisting: Service
    },
    { provide: LOCALE_ID, useValue: 'de' }
  ]
})
export class AppModule {
  constructor() {
    registerLocaleData(localDE);
  }
}
