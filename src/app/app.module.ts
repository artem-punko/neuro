// imports
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { MenuItem } from 'primeng/api';
// components
import { AppComponent } from './app.component';
// services
import { NeuroService } from './services/neuro.service';

// routing
const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
], {});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ChartModule,
    AccordionModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    rootRouting,
    HttpModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NeuroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
