import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {pluck} from 'rxjs'

interface Data{
  articles:[]
}

@Injectable({
  providedIn: 'root'
})


export class NewsService {

  constructor(private http: HttpClient) { }

  search(value: any){
    return this.http.get<Data>(`https://news-web-app-backend.onrender.com/newsCreate?obj=${value}`).pipe(
      pluck('articles')
    );
  }


}
