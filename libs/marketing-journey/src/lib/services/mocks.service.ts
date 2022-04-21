import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//TODO: Remove after openapi is ready

@Injectable()
export class MockHttpService {
  constructor(private http: HttpClient) {}

  submitPromotionForm(user: any): Observable<any> {
    return this.http.post('/promotions/submit', user);
  }

  getUserProfile(): Observable<any> {
    return this.http.get('/users/me/profile');
  }

  getUserPromotions(): Observable<any> {
    return this.http.get('/users/me/promotion');
  }
}
