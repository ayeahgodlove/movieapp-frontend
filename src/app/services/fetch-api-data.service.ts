import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/models/User';

//Declaring the api url that will provide data for the client app
const apiUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  constructor(private http: HttpClient) {}

  // Making the api call for the user registration endpoint
  public userRegistration(userData: IUser): Observable<any> {
    console.log(userData);
    return this.http
      .post(apiUrl + 'users', userData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
