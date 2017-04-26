import { Component, OnInit, Input} from '@angular/core';
import {Article} from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  score: number = 0;
 
  constructor() {


   }

   onUpVote(){

     this.score++;

   }

   onDownVote(){
     this.score--;
   }
  ngOnInit() {
  }

}
