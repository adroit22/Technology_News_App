import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {

  title : String;
  author : String;
  description : String;
  url : String;
  urlToImage : String;
  publishedAt : String;


  constructor(public storage: Storage, private ar: ActivatedRoute, private newsService: NewsService) {
    storage.get('article').then((data : any) => {
      this.title = data.title;
      this.author = data.author;
      this.description = data.description;
      this.url = data.url;
      this.urlToImage = data.urlToImage;
      this.publishedAt = data.publishedAt.substring(0,10);
      console.log('Received Parameter: ' + this.title + '\n' + this.author + '\n' + this.description);
    });
  }

  ngOnInit() { }

}
