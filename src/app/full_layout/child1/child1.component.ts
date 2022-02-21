import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  // @Input() updateChild1 = new EventEmitter<string>()
  @Input() child1: string = '';

  message: string = ''
  constructor() { }

  ngOnInit(): void {
  }
  // updateChild1($event: any) {
  //   this.message = $event
  // }
  // updateParent($event: any) {
  //   this.child1Update.emit($event)
  // }

}
