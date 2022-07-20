import { Component, OnInit } from '@angular/core';

// MUI
import { MatDialog } from '@angular/material/dialog';

// Custom Components
import { UserRegistrationFormComponent } from '../../components/user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../../components/user-login-form/user-login-form.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   * This is the function that will open the dialog when the signup button is clicked
   * returns @void
   */
   openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // Assigning the dialog a width
      width: '350px',
    });
  }

  /**
   * This is the function that will open the dialog when the login button is clicked
   * returns @void
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      // Assigning the dialog a width
      width: '350px',
    });
  }

  /**
   * This is the functino that will open the dialog to display movies
   * returns @void
   */
  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, {
      width: '500px',
    });
  }
 
}
