import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpClient) {}
  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      throw error;
    }
    return throwError(() => error);
  };

  getCoinById(id: string): Observable<any> {
    return this.http
      .get<any>(`https://api.coingecko.com/api/v3/coins/${id}`)
      .pipe(
        map((data: any) => {
          return [data];
        }),
        catchError(this.handleError)
      );
  }
}
