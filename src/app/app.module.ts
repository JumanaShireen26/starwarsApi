import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { AngularMaterialModule } from "./angular-material.module";
import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';
import { MovieModule } from './movies/movie.module';
import { PlanetModule } from './planet/planet.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PeopleModule,
    MovieModule,
    PlanetModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
