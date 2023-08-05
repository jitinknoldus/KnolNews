import {Component} from '@angular/core';
import {NewsServiceService} from "../service/news-service.service";

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent {
  myArray: any[] = [];

  constructor(private newsServiceService: NewsServiceService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.newsServiceService.getdata().subscribe((data) => {
      this.myArray = data.articles
      console.log(data.articles)
    });

  }
}
