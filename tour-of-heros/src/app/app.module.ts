// MODULES
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HerosComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

// SERVICES
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [AppComponent, HerosComponent, HeroDetailComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
