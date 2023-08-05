import { Component } from '@angular/core';
import {NewsServiceService} from "../service/news-service.service";

@Component({
  selector: 'app-griding',
  templateUrl: './griding.component.html',
  styleUrls: ['./griding.component.css']
})
export class GridingComponent {
  myData:any
constructor(private serviceMethod:NewsServiceService) {
  this.getData();
}

getData(){
  this.serviceMethod.getdata().subscribe((data)=>{
    this.myData=data;
    console.log(this.myData)
  })
}
}
