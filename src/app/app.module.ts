import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ColorpatchesComponent } from './color-patches/color-patches.component';
import { FormsModule } from '@angular/forms';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { ColorPatchComponent } from './color-patch/color-patch.component';
import { MemCardComponent } from './mem-card/mem-card.component';
import { RgbaPipe } from './pipes/rgba.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorpatchesComponent,
    MemoryGameComponent,
    ColorPatchComponent,
    MemCardComponent,
    RgbaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
