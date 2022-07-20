import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
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
      width: '280px',
    });
  }
}
