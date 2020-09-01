import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  articles: [];

  constructor(public storage: Storage, public navCtrl: NavController, public httpClient: HttpClient, private newsService: NewsService, private router: Router) { }

  ngOnInit() {

    this.newsService.getTechnologyNews().subscribe(
      (data: any) => {
        this.articles = data.articles;
        console.log('my data: ', data.articles);
      });

  }


  async goToDetails(article: any) {
    await this.storage.set('article', article);
    await this.navCtrl.navigateForward('/news-details');
  }

}
