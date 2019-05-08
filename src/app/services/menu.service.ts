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

  getEntrees(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiMenuUrl}/entrees`)
      .pipe(
        catchError(this.handleError<Product[]>('getEntrees', []))
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
