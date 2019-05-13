import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  private apiMenuUrl = 'http://localhost:3000/api/menu';

  constructor(private http: HttpClient) { }

  /*   GETs   */
  getEntrees(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiMenuUrl}/entrees`)
      .pipe(
        catchError(this.handleError<Food[]>('getEntrees', []))
    );
  }

  getToasts(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiMenuUrl}/toasts`)
      .pipe(
        catchError(this.handleError<Food[]>('getToasts', []))
    );
  }

  getSalads(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiMenuUrl}/salads`)
      .pipe(
        catchError(this.handleError<Food[]>('getSalads', []))
    );
  }

  getPastas(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiMenuUrl}/pastas`)
      .pipe(
        catchError(this.handleError<Food[]>('getPastas', []))
    );
  }

  getScrambleds(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiMenuUrl}/scrambleds`)
      .pipe(
        catchError(this.handleError<Food[]>('getScrambleds', []))
    );
  }

  getFishs(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiMenuUrl}/fishs`)
      .pipe(
        catchError(this.handleError<Food[]>('getFishs', []))
    );
  }

  getMeats(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiMenuUrl}/meats`)
      .pipe(
        catchError(this.handleError<Food[]>('getMeats', []))
    );
  }

  getDesserts(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiMenuUrl}/desserts`)
      .pipe(
        catchError(this.handleError<Food[]>('getDesserts', []))
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
