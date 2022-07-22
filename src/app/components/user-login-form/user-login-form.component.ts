import { Component, OnInit, Input } from '@angular/core';
import { emptyUser, IUser } from '../../../models/User';
// MUI components
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

//Services
import { FetchApiDataService } from '../../services/fetch-api-data.service';
import { emptyToken } from 'src/models/Token';

// router
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css'],
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData: IUser = emptyUser;

  constructor(
    private dialogRef: MatDialogRef<UserLoginFormComponent>,
    private snackBar: MatSnackBar,
    private fetchApiData: FetchApiDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      // Save token to token mmodel
      emptyToken.token = result.token;
      // Save toeken to sessionStorage
      sessionStorage.setItem('token', result.token);
      localStorage.setItem('token', JSON.stringify(result.token));

      // Logic for a successful user registration goes here! (To be implemented)
      this.dialogRef.close(); // This will close the modal on success!
      this.snackBar.open(result, 'OK', {
        duration: 2000,
      });
    });
    this.router.navigate(['movies']);
  }
}
