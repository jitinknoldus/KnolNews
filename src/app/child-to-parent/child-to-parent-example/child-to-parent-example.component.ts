import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-to-parent-example',
  templateUrl: './child-to-parent-example.component.html',
  styleUrls: ['./child-to-parent-example.component.css']
})
export class ChildToParentExampleComponent {
  @Output() myEvent = new EventEmitter<string>();

  onClick() {
    // Emit the event to the parent component
    this.myEvent.emit('This was event was to be emmited');
  }
}
