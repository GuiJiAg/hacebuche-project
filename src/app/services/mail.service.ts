import { Injectable } from '@angular/core';
import { Reserve } from '../models/mail';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applications/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiMailUrl = 'http://localhost:3000/api/mail';

  constructor(private http: HttpClient) { }

  sendMail(mail: Reserve): Observable<Reserve> {
    return this.http.post<Reserve>(this.apiMailUrl, mail).pipe(
      catchError(this.handleError<Reserve>('sendMail'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  
    // TODO: send the error to remote logging infrastructure
    console.error(`${operation} failed: ${error.message}`); // log to console instead
  
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
