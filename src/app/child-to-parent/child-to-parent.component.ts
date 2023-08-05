import { Component } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent {
  eventData: string = '';

  onChildEvent(data: string) {
    // Handle the event data received from the child component
    this.eventData = data;
    console.log(this.eventData)
    console.log('rhual')
  }
}
