import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cardgridding',
  templateUrl: './cardgridding.component.html',
  styleUrls: ['./cardgridding.component.css']
})
export class CardgriddingComponent {
  @Input() first_name: string = "";
  @Input() last_name:string="";
  @Input() email:string="";
  @Input() gender:string="";
  @Input() rahul:any;

  constructor() {
    console.log(this.first_name)
  }

}
