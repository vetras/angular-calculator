import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTE } from './config/route.config';

import { AppComponent } from './app.component';
import { IntroPageComponent } from './pages/intro/intro.component';
import { NumericButtonComponent } from './components/numeric-button/numeric.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    NumericButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
