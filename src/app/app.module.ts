import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AngularMaterialModule } from 'src/shared/angular-material/angular-material.module';
import { SearchComponent } from './components/search/search.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ShowsComponent } from './components/shows/shows.component';
import { MatchersComponent } from './components/matchers/matchers.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from 'src/shared/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PrimengModule } from 'src/shared/primeng/primeng.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProvidersComponent,
    ShowsComponent,
    MatchersComponent,
    NotFoundComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AngularMaterialModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
