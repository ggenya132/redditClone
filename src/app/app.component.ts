import { Component, OnInit} from '@angular/core';
import {ArticleService} from './article.service';
import {Article} from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  articles: Article[] = [];

  constructor(private articleService: ArticleService){


  }
  ngOnInit(){
    this.articles = this.articleService.articles;

}
}
