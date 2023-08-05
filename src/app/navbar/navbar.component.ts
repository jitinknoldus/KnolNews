import {Component, Input} from '@angular/core';
import {NewsServiceService} from "../service/news-service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private newsService:NewsServiceService) {

  }


  general = "general"
  sports="sports"


  changeCategory(category:string){
    this.newsService.getdata(category);
  }


}
