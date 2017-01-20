import { Component, OnInit, Input } from '@angular/core';
import {Article} from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
	class: 'row' //want to set a row class on a host element which is 'app-article'
  }
})

export class ArticleComponent implements OnInit {

  	@Input() article: Article;

	voteUp() {
		this.article.voteUp();
		return false;
	}

	voteDown() {
		this.article.voteDown();
		return false;
	}

	ngOnInit() {
	}

}
