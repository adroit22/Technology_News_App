import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

   newsUrl ='https://newsapi.org/v2/everything?q=technology&apiKey=422797959c0b4de493c5f2db6b245015';

  constructor(private httpClient: HttpClient) { }

  getTechnologyNews(){
    return this.httpClient.get(this.newsUrl);
  }

}
