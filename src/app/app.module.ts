import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { MarkComponent } from './components/buttons/mark/mark.component';
import { LevelComponent } from './components/buttons/level/level.component';
import { UserComponent } from './components/buttons/user/user.component';
import { ResetComponent } from './components/buttons/reset/reset.component';
import { CalculatorComponent } from './components/services/calculator/calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    GamePageComponent,
    MarkComponent,
    LevelComponent,
    UserComponent,
    ResetComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
