import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  apiUrl: string = 'http://localhost:3000';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  constructor(private http: HttpClient) { }

  createStaff(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/mentor/', data)
      .pipe(
        catchError(this.handleError)
      )
  }


  listStaff() {
    return this.http.get(this.apiUrl + '/mentor/');

  }


  updateStaff(id: any, data: any): Observable<any> {
    return this.http.put(this.apiUrl + '/mentor/' + id, data, { headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }

  deleteStaff(id: any,): Observable<any> {
    return this.http.delete(this.apiUrl + '/mentor/' + id).pipe(
      catchError(this.handleError)
    )
  }
}
