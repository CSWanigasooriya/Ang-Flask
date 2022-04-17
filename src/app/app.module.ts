import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlaskService } from './services/flask.service';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FlaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
