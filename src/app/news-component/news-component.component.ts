import {Component} from '@angular/core';
import {NewsServiceService} from "../service/news-service.service";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent {
  myArray: any[] = [];


  constructor(private newsServiceService: NewsServiceService) {
  }



  category = "general";

  ngOnInit(): void {
    this.getData(this.category);
  }


  getData(category: string) {
    this.newsServiceService.getdata(this.category).subscribe((data) => {
      this.myArray = data.articles
      console.log(data.articles)
    });

  }

  data:any;



}
