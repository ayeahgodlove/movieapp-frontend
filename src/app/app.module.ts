import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Angular Router
import { RouterModule, Routes } from '@angular/router';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';

// MUI modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from 'src/redux/movies/movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { MovieEffects } from 'src/redux/movies/movie.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { VideojsComponent } from './components/videojs/videojs.component';
import { BypassSecurityComponent } from './components/bypass-security/bypass-security.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'movies/:name', component: MovieDetailComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    MovieDetailComponent,
    VideojsComponent,
    BypassSecurityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    SlickCarouselModule,
    MatGridListModule,
    StoreModule.forRoot({ movies: movieReducer }),
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
