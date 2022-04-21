import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileHttpService } from '@backbase/retail/util/promotions';

//TODO: Remove after openapi is ready

@Injectable()
export class MockHttpService {
  constructor(private http: HttpClient, private profileHttp: ProfileHttpService) {}

  submitPromotionForm(user: any): Observable<any> {
    return this.http.post('/promotions/submit', user).pipe(map((res: any) => res));
  }

  getUserProfile(): Observable<any> {
    return this.profileHttp.getUserProfile().pipe(map((res: any) => res));
//    return this.http.get('/users/me/profile').pipe(map((res: any) => res));
  }

  getUserPromotions(): Observable<any> {
    return this.profileHttp.getUserPromotions().pipe(map((res: any) => res));
//    return this.http.get('/users/me/promotion').pipe(map((res: any) => res));
  }
}
