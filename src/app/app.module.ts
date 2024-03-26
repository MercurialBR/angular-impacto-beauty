import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { IconWhiteComponent } from './components/icon-white/icon-white.component';
import { PaletaFontComponent } from './components/paleta-font/paleta-font.component';
import { PaletaComponent } from './components/paleta-font/paleta/paleta.component';
import { FonteComponent } from './components/paleta-font/fonte/fonte.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    IconWhiteComponent,
    PaletaFontComponent,
    PaletaComponent,
    FonteComponent,
    PatternComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
