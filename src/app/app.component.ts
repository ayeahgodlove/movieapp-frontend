import { Component } from '@angular/core';

// MUI
import { MatDialog } from '@angular/material/dialog';

// Custom Components
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Christain Movies';

  constructor(private dialog: MatDialog) {}

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
}
