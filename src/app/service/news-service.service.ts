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
    return this.http.get('https://my.api.mockaroo.com/rahul_poc.json?key=4be4e570');
  }

}
