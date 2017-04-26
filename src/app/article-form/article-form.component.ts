import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ArticleService} from '../article.service';
import {Article} from '../article.model';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  onSubmit(form: NgForm){
    let newArticle = new Article(form.value.articleName, form.value.articleLink);
    console.log(newArticle);
    this.articleService.articles.push(new Article(form.value.articleName, form.value.articleLink));
  }
  ngOnInit() {
  }

}
