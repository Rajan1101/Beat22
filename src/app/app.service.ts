import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('https://api-server.illpeoplemusic.com/api/v2/playlist/trending').pipe(map((res) => res));
  }

}
