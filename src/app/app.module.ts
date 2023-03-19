import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component'
import { FormsModule } from '@angular/forms';
import { DirectDirective } from './direct.directive';
import { Sample1Directive } from './directives/sample1.directive';
import { Sample2Directive } from './directives/sample2.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectDirective,
    Sample1Directive,
    Sample2Directive,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
