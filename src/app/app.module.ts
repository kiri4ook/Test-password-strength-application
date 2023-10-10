import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PasswordCheckerComponent } from '../password-checker/password-checker.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordCheckerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
