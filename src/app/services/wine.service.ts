import { Injectable } from '@angular/core';
import { Wine } from '../models/wine';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  private apiWineUrl = 'http://localhost:3000/api/wines';

  constructor(private http: HttpClient) { }

  /*   GETs   */
  getAndalusianWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${this.apiWineUrl}/andalusianWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getAndalusianWines', []))
    );
  }

  getRiojaWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${this.apiWineUrl}/RiojaWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getRiojaWines', []))
    );
  }

  getRiberaWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${this.apiWineUrl}/RiberaWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getRiberaWines', []))
    );
  }

  getCastillaWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${this.apiWineUrl}/CastillaWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getCastillaWines', []))
    );
  }

  getAlbarinios(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${this.apiWineUrl}/albarinios`)
      .pipe(
        catchError(this.handleError<Wine[]>('getAlbarinios', []))
    );
  }

  getRuedaWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${this.apiWineUrl}/ruedaWines`)
      .pipe(
        catchError(this.handleError<Wine[]>('getRuedaWines', []))
    );
  }

  getOlorosos(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${this.apiWineUrl}/olorosos`)
      .pipe(
        catchError(this.handleError<Wine[]>('getOlorosos', []))
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
