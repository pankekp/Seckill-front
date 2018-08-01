import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user.service';
import {ResponseProcessorService} from './service/response-processor.service';
import {FooterComponent} from './footer/footer.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {InfoShareService} from './service/info-share.service';
import {InfoStorageService} from './service/info-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: UserService, useClass: UserService},
    {provide: InfoShareService, useClass: InfoShareService},
    {provide: InfoStorageService, useClass: InfoStorageService},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseProcessorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
