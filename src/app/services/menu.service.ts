import { Injectable } from '@angular/core';
import { Product } from '../product';
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
  getEntrees(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiMenuUrl}/entrees`)
      .pipe(
        catchError(this.handleError<Product[]>('getEntrees', []))
    );
  }

  getToasts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiMenuUrl}/toasts`)
      .pipe(
        catchError(this.handleError<Product[]>('getToasts', []))
    );
  }

  getSalads(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiMenuUrl}/salads`)
      .pipe(
        catchError(this.handleError<Product[]>('getSalads', []))
    );
  }

  getPastas(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiMenuUrl}/pastas`)
      .pipe(
        catchError(this.handleError<Product[]>('getPastas', []))
    );
  }

  getScrambleds(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiMenuUrl}/scrambleds`)
      .pipe(
        catchError(this.handleError<Product[]>('getScrambleds', []))
    );
  }

  getFishs(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiMenuUrl}/fishs`)
      .pipe(
        catchError(this.handleError<Product[]>('getFishs', []))
    );
  }

  getMeats(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiMenuUrl}/meats`)
      .pipe(
        catchError(this.handleError<Product[]>('getMeats', []))
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
