import { Injectable } from '@angular/core';
import { Article} from './article.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ArticleService {

  articles: Article[] = [];
  articlesShared = new Subject;
  
  constructor() { }

}
