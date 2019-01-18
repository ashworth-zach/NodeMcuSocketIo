import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
 
const config: SocketIoConfig = { url: 'http://localhost:8001', options: {} };
 
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,HttpClientModule,
    FormsModule,SocketIoModule.forRoot(config)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
