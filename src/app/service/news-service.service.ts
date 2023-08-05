import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) {
  }


  getdata(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=c65c6f17f1ed45bba24f4c724bdd1ef3');
  }

}
