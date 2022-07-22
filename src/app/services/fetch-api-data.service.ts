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
import { IMovie } from 'src/models/Movie';
import { emptyToken } from 'src/models/Token';


const getHttpOptions = () => {
  // let token = sessionStorage.getItem('token');
  let token =  JSON.parse(`${localStorage.getItem('token')}`);
  console.log("Access: ", token)
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${
        token !== null ? token : ''
      }`,
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'mode': 'no-cors',
    })
  }
};
@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  /**
   * Declaring the api url that will provide data for the client app
   * @string
   */
  apiUrl: string = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) {}

  /**
   * Making the api call for the user registration endpoint
   */
  userRegistration(userData: IUser): Observable<any> {
    console.log(userData);
    return this.http
      .post<IUser>(this.apiUrl + 'users', userData, getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  /**
   * Making the api call for the user login endpoint
   */
  userLogin(userData: IUser): Observable<any> {
    const user = {
      username: userData.username,
      password: userData.password,
    };
    return this.http
      .post<IUser>(this.apiUrl + 'users/login', user, getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  /**
   * Fetch movies from API
   * returns @movies of type @IMovie
   */
  getAllMovies(): Observable<IMovie[]> {
    const movies = this.http
      .get<IMovie[]>(this.apiUrl + 'movies',getHttpOptions())
      .pipe(catchError<any, Observable<IMovie[]>>(this.handleError));
    return movies;
  }

  handleError(error: HttpErrorResponse): any {
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
