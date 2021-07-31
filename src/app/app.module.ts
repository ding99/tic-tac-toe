import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { MarkComponent } from './components/buttons/mark/mark.component';
import { LevelComponent } from './components/buttons/level/level.component';
import { UserComponent } from './components/buttons/user/user.component';
import { ResetComponent } from './components/buttons/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    GamePageComponent,
    MarkComponent,
    LevelComponent,
    UserComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
