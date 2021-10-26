import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Response} from "../../model/response";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = 'api/';

  constructor(private http: HttpClient) {
  }

  sendMessage(message: string) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<Response>(`${this.api}execute`, message, {headers})
      .pipe(
        catchError(this.errorHandle)
      );
  }

  errorHandle(error: any) {
    if (error.status === 401) {
      const removeToken = localStorage.removeItem('access_token');
      if (removeToken !== null) {
      }
    }

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
