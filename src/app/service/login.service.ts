import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}

  login(data: object): Observable<any> {
    const url = 'saaadsd';
    return this.httpClient.post(url, data);
  }
}
