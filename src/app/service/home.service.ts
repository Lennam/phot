import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getDailyPic(): Observable<any> {
    const url =
      'https://cn.bing.com/HPImageArchive.aspx?format=json&idx=0&n=1&mkt=zh-CN';
    return this.http.get(url, httpOptions);
    // .pipe(catchError(console.log('error')));
  }

  // private handleError();
}
