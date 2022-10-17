import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventListService {
  public baseUrl = "https://raw.githubusercontent.com/xsolla/test-task-frontend/master/events.json";

  constructor(private httpClient: HttpClient) { }

  public getEvents(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}