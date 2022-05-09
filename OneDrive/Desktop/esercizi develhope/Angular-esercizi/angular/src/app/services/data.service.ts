import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('https://api.covid19api.com/')
    .pipe(
      tap((data)=> console.log(data))
    )
  }
}
