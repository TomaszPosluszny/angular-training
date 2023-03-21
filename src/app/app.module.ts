import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component'
import { FormsModule } from '@angular/forms';
import { DirectDirective } from './direct.directive';
import { Sample1Directive } from './directives/sample1.directive';
import { Sample2Directive } from './directives/sample2.directive';
import { Sample3Directive } from './directives/sample3.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectDirective,
    Sample1Directive,
    Sample2Directive,
    Sample3Directive,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
